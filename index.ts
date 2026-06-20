import type { ClientConfig } from "./client";
import * as coreEndpoints from "./endpoints";
import * as eventEndpoints from "./endpoints/events";

export * from "./client";
export * from "./schemas";
export * from "./endpoints";
export * from "./endpoints/events";

const endpoints = { ...coreEndpoints, ...eventEndpoints };

type EndpointFn = (config: ClientConfig, ...args: never[]) => unknown;

type Bound<F> = F extends (config: ClientConfig, ...args: infer A) => infer R
  ? (...args: A) => R
  : never;

/** All endpoint functions with their leading `ClientConfig` argument bound. */
export type SolidarityClient = {
  [K in keyof typeof endpoints]: Bound<(typeof endpoints)[K]>;
};

/**
 * Binds a {@link ClientConfig} to every endpoint so they can be called without
 * passing the config each time:
 *
 * ```ts
 * const client = createClient({ apiKey: "..." });
 * const res = await client.listUsers({ _limit: 50 });
 * ```
 */
export function createClient(config: ClientConfig): SolidarityClient {
  const bound: Record<string, unknown> = {};
  for (const [name, fn] of Object.entries(endpoints)) {
    bound[name] = (...args: unknown[]) => (fn as EndpointFn)(config, ...(args as never[]));
  }
  return bound as SolidarityClient;
}

export default createClient;
