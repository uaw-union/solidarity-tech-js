import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'solidarity-tech/v1 (api/6.1.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Retrieves all activities
   *
   */
  getActivities(metadata?: types.GetActivitiesMetadataParam): Promise<FetchResponse<200, types.GetActivitiesResponse200>> {
    return this.core.fetch('/activities', 'get', metadata);
  }

  /**
   * Retrieves all calls
   *
   */
  getCalls(metadata?: types.GetCallsMetadataParam): Promise<FetchResponse<200, types.GetCallsResponse200>> {
    return this.core.fetch('/calls', 'get', metadata);
  }

  /**
   * Retrieves all chapters
   *
   */
  getChapters(metadata?: types.GetChaptersMetadataParam): Promise<FetchResponse<200, types.GetChaptersResponse200>> {
    return this.core.fetch('/chapters', 'get', metadata);
  }

  /**
   * Retrieves all custom user properties
   *
   */
  getCustom_user_properties(metadata?: types.GetCustomUserPropertiesMetadataParam): Promise<FetchResponse<200, types.GetCustomUserPropertiesResponse200>> {
    return this.core.fetch('/custom_user_properties', 'get', metadata);
  }

  /**
   * Sends a text message
   *
   */
  postTexts(metadata: types.PostTextsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/texts', 'post', metadata);
  }

  /**
   * Retrieves a list of texts
   *
   */
  getTexts(metadata?: types.GetTextsMetadataParam): Promise<FetchResponse<200, types.GetTextsResponse200>> {
    return this.core.fetch('/texts', 'get', metadata);
  }

  /**
   * Creates a user action for a user. Note: This endpoint cannot be used for creating
   * actions related to donation pages or scheduled call pages.
   *
   * @summary Creates a user action
   */
  postUser_actions(body: types.PostUserActionsBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/user_actions', 'post', body);
  }

  /**
   * Creates a user note
   *
   */
  postUser_notes(metadata: types.PostUserNotesMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/user_notes', 'post', metadata);
  }

  /**
   * Creates or updates a user
   *
   */
  postUsers(body: types.PostUsersBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/users', 'post', body);
  }

  /**
   * Retrieves a list of users
   *
   */
  getUsers(metadata?: types.GetUsersMetadataParam): Promise<FetchResponse<200, types.GetUsersResponse200>> {
    return this.core.fetch('/users', 'get', metadata);
  }

  /**
   * Updates a user
   *
   */
  putUsersId(body: types.PutUsersIdBodyParam, metadata: types.PutUsersIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/users/{id}', 'put', body, metadata);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { GetActivitiesMetadataParam, GetActivitiesResponse200, GetCallsMetadataParam, GetCallsResponse200, GetChaptersMetadataParam, GetChaptersResponse200, GetCustomUserPropertiesMetadataParam, GetCustomUserPropertiesResponse200, GetTextsMetadataParam, GetTextsResponse200, GetUsersMetadataParam, GetUsersResponse200, PostTextsMetadataParam, PostUserActionsBodyParam, PostUserNotesMetadataParam, PostUsersBodyParam, PutUsersIdBodyParam, PutUsersIdMetadataParam } from './types';
