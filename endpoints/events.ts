import { z } from "zod";
import { apiGet } from "../client";
import type { ApiResult, ClientConfig } from "../client";
import { paginationMeta } from "../schemas";
import type { ListParams } from "../endpoints";

/* ------------------------------------------------------------------ *
 * Schemas
 * ------------------------------------------------------------------ */

/** Parsed `{lng, lat}` pair (the API sends this JSON-stringified). */
export const stCoordinates = z.object({
  lng: z.number(),
  lat: z.number(),
});

export const stLocationData = z.object({
  components: z.string().optional(),
  // Raw from the API as a JSON-stringified `{lng, lat}`; `fetchAllEvents`
  // parses it into this object (or null when absent/invalid).
  coordinates: stCoordinates.nullable().optional(),
  address_city: z.string().optional(),
  full_address: z.string().optional(),
  address_state: z.string().optional(),
  address_line_1: z.string().optional(),
  address_country: z.string().optional(),
  address_postal_code: z.string().optional(),
});

export const stEventSession = z.object({
  id: z.number().int(),
  mobilize_event_id: z.number().int(),
  primary_session_id: z.number().int(),
  start_time: z.string(),
  end_time: z.string(),
  title: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  location_name: z.string().nullable(),
  location_data: stLocationData.nullable(),
  // PostGIS WKT `POINT (lon lat)` — note lon first. Null when ungeocoded.
  lonlat: z.string().nullable(),
  // Empty string (not null) when the session has no address.
  location_address: z.string(),
  note: z.string().nullable(),
  tags: z.array(z.string()),
  event_type: z.string(),
  show_rsvp_bar: z.boolean(),
  show_title_in_form: z.boolean(),
  max_capacity: z.number().int(),
  zoom_account_id: z.number().int().nullable(),
  zoom_meeting_id: z.number().int().nullable(),
  zoom_meeting_data: z.unknown().nullable(),
  zoom_join_before_host: z.boolean(),
  zoom_attendance_synced_at: z.string().nullable(),
  source_calendar_item_id: z.number().int().nullable(),
  paired_meci_id: z.number().int().nullable(),
  recurring_schedule_id: z.number().int().nullable(),
  mobilize_event_task_id: z.number().int().nullable(),
  rsvp_count: z.number().int(),
  attendance_count: z.number().int(),
  host_tools_url: z.string(),
  city_state_label: z.string().nullable(),
});

export const stEvent = z.object({
  id: z.number().int(),
  title: z.string(),
  scope_id: z.number().int(),
  scope_type: z.string(),
  event_type: z.string(),
  location_name: z.string().nullable(),
  location_data: stLocationData.nullable(),
  tags: z.array(z.string()),
  campaign_tags: z.array(z.string()),
  event_sessions: z.array(stEventSession),
  event_page_url: z.string(),
  event_page_id: z.number().int(),
  image_url: z.string().nullable(),
  description: z.string(),
  hide_address_until_rsvp: z.boolean(),
  show_in_web_calendars: z.boolean(),
  primary_event_id: z.number().int(),
  is_co_hosted_mirror: z.boolean(),
  created_at: z.string(),
});

export const eventsResponse = z.object({
  data: z.array(stEvent),
  meta: paginationMeta,
});

export type StCoordinates = z.infer<typeof stCoordinates>;
export type StLocationData = z.infer<typeof stLocationData>;
export type StEventSession = z.infer<typeof stEventSession>;
export type StEvent = z.infer<typeof stEvent>;
export type EventsResponse = z.infer<typeof eventsResponse>;

/* ------------------------------------------------------------------ *
 * Events
 * ------------------------------------------------------------------ */

/** GET /events — Lists events. */
export function listEvents(
  config: ClientConfig,
  params: ListParams = {},
): Promise<ApiResult<EventsResponse>> {
  return apiGet(config, "/events", { query: { ...params }, schema: eventsResponse });
}

/** GET /events/{id} — Shows a single event. */
export function getEvent(config: ClientConfig, id: number): Promise<ApiResult<unknown>> {
  return apiGet(config, `/events/${id}`);
}
