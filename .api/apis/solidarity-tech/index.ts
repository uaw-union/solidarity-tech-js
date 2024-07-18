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
   * Lists agent assignments
   *
   */
  getAgent_assignments(metadata?: types.GetAgentAssignmentsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/agent_assignments', 'get', metadata);
  }

  /**
   * Creates an agent assignment with the specified details.
   *
   * @summary Creates an agent assignment
   */
  postAgent_assignments(body: types.PostAgentAssignmentsBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/agent_assignments', 'post', body);
  }

  /**
   * Shows a single agent assignment
   *
   */
  getAgent_assignmentsId(metadata: types.GetAgentAssignmentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/agent_assignments/{id}', 'get', metadata);
  }

  /**
   * Updates an agent assignment with the specified details.
   *
   * @summary Updates an agent assignment
   */
  putAgent_assignmentsId(body: types.PutAgentAssignmentsIdBodyParam, metadata: types.PutAgentAssignmentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/agent_assignments/{id}', 'put', body, metadata);
  }

  /**
   * Deletes an agent assignment with the specified ID.
   *
   * @summary Deletes an agent assignment
   */
  deleteAgent_assignmentsId(metadata: types.DeleteAgentAssignmentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/agent_assignments/{id}', 'delete', metadata);
  }

  /**
   * Retrieves all calls
   *
   */
  getCalls(metadata?: types.GetCallsMetadataParam): Promise<FetchResponse<200, types.GetCallsResponse200>> {
    return this.core.fetch('/calls', 'get', metadata);
  }

  /**
   * Lists chapter phone numbers
   *
   */
  getChapter_phone_numbers(metadata?: types.GetChapterPhoneNumbersMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/chapter_phone_numbers', 'get', metadata);
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
   * Lists email blasts
   *
   */
  getEmail_blasts(metadata?: types.GetEmailBlastsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/email_blasts', 'get', metadata);
  }

  /**
   * Shows a single email blast
   *
   */
  getEmail_blastsId(metadata: types.GetEmailBlastsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/email_blasts/{id}', 'get', metadata);
  }

  /**
   * Lists event attendances
   *
   */
  getEvent_attendances(metadata?: types.GetEventAttendancesMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_attendances', 'get', metadata);
  }

  /**
   * Creates an event attendance with the specified details.
   *
   * @summary Creates an event attendance
   */
  postEvent_attendances(body: types.PostEventAttendancesBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_attendances', 'post', body);
  }

  /**
   * Lists event rsvps
   *
   */
  getEvent_rsvps(metadata?: types.GetEventRsvpsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_rsvps', 'get', metadata);
  }

  /**
   * Creates an event rsvp with the specified details.
   *
   * @summary Creates an event rsvp
   */
  postEvent_rsvps(body: types.PostEventRsvpsBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_rsvps', 'post', body);
  }

  /**
   * Shows a single event rsvp
   *
   */
  getEvent_rsvpsId(metadata: types.GetEventRsvpsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_rsvps/{id}', 'get', metadata);
  }

  /**
   * Updates an event rsvp with the specified details.
   *
   * @summary Updates an event rsvp
   */
  putEvent_rsvpsId(body: types.PutEventRsvpsIdBodyParam, metadata: types.PutEventRsvpsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_rsvps/{id}', 'put', body, metadata);
  }

  /**
   * Deletes an event rsvp with the specified ID.
   *
   * @summary Deletes an event rsvp
   */
  deleteEvent_rsvpsId(metadata: types.DeleteEventRsvpsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_rsvps/{id}', 'delete', metadata);
  }

  /**
   * Lists event sessions
   *
   */
  getEvent_sessions(metadata?: types.GetEventSessionsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_sessions', 'get', metadata);
  }

  /**
   * Creates an event session with the specified details.
   *
   * @summary Creates an event session
   */
  postEvent_sessions(body: types.PostEventSessionsBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_sessions', 'post', body);
  }

  /**
   * Shows a single event session
   *
   */
  getEvent_sessionsId(metadata: types.GetEventSessionsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_sessions/{id}', 'get', metadata);
  }

  /**
   * Updates an event session with the specified details.
   *
   * @summary Updates an event session
   */
  putEvent_sessionsId(body: types.PutEventSessionsIdBodyParam, metadata: types.PutEventSessionsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_sessions/{id}', 'put', body, metadata);
  }

  /**
   * Deletes an event session with the specified ID.
   *
   * @summary Deletes an event session
   */
  deleteEvent_sessionsId(metadata: types.DeleteEventSessionsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/event_sessions/{id}', 'delete', metadata);
  }

  /**
   * Lists events
   *
   */
  getEvents(metadata?: types.GetEventsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/events', 'get', metadata);
  }

  /**
   * Shows a single event
   *
   */
  getEventsId(metadata: types.GetEventsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/events/{id}', 'get', metadata);
  }

  /**
   * Lists organizations
   *
   */
  getOrganizations(metadata?: types.GetOrganizationsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/organizations', 'get', metadata);
  }

  /**
   * Shows a single organization
   *
   */
  getOrganizationsId(metadata: types.GetOrganizationsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/organizations/{id}', 'get', metadata);
  }

  /**
   * Lists pages
   *
   */
  getPages(metadata?: types.GetPagesMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/pages', 'get', metadata);
  }

  /**
   * Shows a single page
   *
   */
  getPagesId(metadata: types.GetPagesIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/pages/{id}', 'get', metadata);
  }

  /**
   * Lists phonebanks
   *
   */
  getPhonebanks(metadata?: types.GetPhonebanksMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/phonebanks', 'get', metadata);
  }

  /**
   * Shows a single phonebank
   *
   */
  getPhonebanksId(metadata: types.GetPhonebanksIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/phonebanks/{id}', 'get', metadata);
  }

  /**
   * Lists scheduled calls
   *
   */
  getScheduled_calls(metadata?: types.GetScheduledCallsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/scheduled_calls', 'get', metadata);
  }

  /**
   * Shows a single scheduled call
   *
   */
  getScheduled_callsId(metadata: types.GetScheduledCallsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/scheduled_calls/{id}', 'get', metadata);
  }

  /**
   * Lists scheduled tasks
   *
   */
  getScheduled_tasks(metadata?: types.GetScheduledTasksMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/scheduled_tasks', 'get', metadata);
  }

  /**
   * Creates an scheduled task with the specified details.
   *
   * @summary Creates an scheduled task
   */
  postScheduled_tasks(body: types.PostScheduledTasksBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/scheduled_tasks', 'post', body);
  }

  /**
   * Shows a single scheduled task
   *
   */
  getScheduled_tasksId(metadata: types.GetScheduledTasksIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/scheduled_tasks/{id}', 'get', metadata);
  }

  /**
   * Updates an scheduled task with the specified details.
   *
   * @summary Updates an scheduled task
   */
  putScheduled_tasksId(body: types.PutScheduledTasksIdBodyParam, metadata: types.PutScheduledTasksIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/scheduled_tasks/{id}', 'put', body, metadata);
  }

  /**
   * Deletes an scheduled task with the specified ID.
   *
   * @summary Deletes an scheduled task
   */
  deleteScheduled_tasksId(metadata: types.DeleteScheduledTasksIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/scheduled_tasks/{id}', 'delete', metadata);
  }

  /**
   * Lists task agents
   *
   */
  getTask_agents(metadata?: types.GetTaskAgentsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_agents', 'get', metadata);
  }

  /**
   * Creates an task agent with the specified details.
   *
   * @summary Creates an task agent
   */
  postTask_agents(body: types.PostTaskAgentsBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_agents', 'post', body);
  }

  /**
   * Shows a single task agent
   *
   */
  getTask_agentsId(metadata: types.GetTaskAgentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_agents/{id}', 'get', metadata);
  }

  /**
   * Deletes an task agent with the specified ID.
   *
   * @summary Deletes an task agent
   */
  deleteTask_agentsId(metadata: types.DeleteTaskAgentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_agents/{id}', 'delete', metadata);
  }

  /**
   * Lists task assignments
   *
   */
  getTask_assignments(metadata?: types.GetTaskAssignmentsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_assignments', 'get', metadata);
  }

  /**
   * Creates an task assignment with the specified details.
   *
   * @summary Creates an task assignment
   */
  postTask_assignments(body: types.PostTaskAssignmentsBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_assignments', 'post', body);
  }

  /**
   * Shows a single task assignment
   *
   */
  getTask_assignmentsId(metadata: types.GetTaskAssignmentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_assignments/{id}', 'get', metadata);
  }

  /**
   * Updates an task assignment with the specified details.
   *
   * @summary Updates an task assignment
   */
  putTask_assignmentsId(body: types.PutTaskAssignmentsIdBodyParam, metadata: types.PutTaskAssignmentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_assignments/{id}', 'put', body, metadata);
  }

  /**
   * Deletes an task assignment with the specified ID.
   *
   * @summary Deletes an task assignment
   */
  deleteTask_assignmentsId(metadata: types.DeleteTaskAssignmentsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task_assignments/{id}', 'delete', metadata);
  }

  /**
   * Lists team members
   *
   */
  getTeam_members(metadata?: types.GetTeamMembersMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/team_members', 'get', metadata);
  }

  /**
   * Lists text blasts
   *
   */
  getText_blasts(metadata?: types.GetTextBlastsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/text_blasts', 'get', metadata);
  }

  /**
   * Shows a single text blast
   *
   */
  getText_blastsId(metadata: types.GetTextBlastsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/text_blasts/{id}', 'get', metadata);
  }

  /**
   * Lists text templates
   *
   */
  getText_templates(metadata?: types.GetTextTemplatesMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/text_templates', 'get', metadata);
  }

  /**
   * Creates an text template with the specified details.
   *
   * @summary Creates an text template
   */
  postText_templates(body: types.PostTextTemplatesBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/text_templates', 'post', body);
  }

  /**
   * Shows a single text template
   *
   */
  getText_templatesId(metadata: types.GetTextTemplatesIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/text_templates/{id}', 'get', metadata);
  }

  /**
   * Updates an text template with the specified details.
   *
   * @summary Updates an text template
   */
  putText_templatesId(body: types.PutTextTemplatesIdBodyParam, metadata: types.PutTextTemplatesIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/text_templates/{id}', 'put', body, metadata);
  }

  /**
   * Deletes an text template with the specified ID.
   *
   * @summary Deletes an text template
   */
  deleteText_templatesId(metadata: types.DeleteTextTemplatesIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/text_templates/{id}', 'delete', metadata);
  }

  /**
   * Lists textbanks
   *
   */
  getTextbanks(metadata?: types.GetTextbanksMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/textbanks', 'get', metadata);
  }

  /**
   * Shows a single textbank
   *
   */
  getTextbanksId(metadata: types.GetTextbanksIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/textbanks/{id}', 'get', metadata);
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
   * Lists user lists
   *
   */
  getUser_lists(metadata?: types.GetUserListsMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/user_lists', 'get', metadata);
  }

  /**
   * Shows a single user list
   *
   */
  getUser_listsId(metadata: types.GetUserListsIdMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/user_lists/{id}', 'get', metadata);
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

export type { DeleteAgentAssignmentsIdMetadataParam, DeleteEventRsvpsIdMetadataParam, DeleteEventSessionsIdMetadataParam, DeleteScheduledTasksIdMetadataParam, DeleteTaskAgentsIdMetadataParam, DeleteTaskAssignmentsIdMetadataParam, DeleteTextTemplatesIdMetadataParam, GetActivitiesMetadataParam, GetActivitiesResponse200, GetAgentAssignmentsIdMetadataParam, GetAgentAssignmentsMetadataParam, GetCallsMetadataParam, GetCallsResponse200, GetChapterPhoneNumbersMetadataParam, GetChaptersMetadataParam, GetChaptersResponse200, GetCustomUserPropertiesMetadataParam, GetCustomUserPropertiesResponse200, GetEmailBlastsIdMetadataParam, GetEmailBlastsMetadataParam, GetEventAttendancesMetadataParam, GetEventRsvpsIdMetadataParam, GetEventRsvpsMetadataParam, GetEventSessionsIdMetadataParam, GetEventSessionsMetadataParam, GetEventsIdMetadataParam, GetEventsMetadataParam, GetOrganizationsIdMetadataParam, GetOrganizationsMetadataParam, GetPagesIdMetadataParam, GetPagesMetadataParam, GetPhonebanksIdMetadataParam, GetPhonebanksMetadataParam, GetScheduledCallsIdMetadataParam, GetScheduledCallsMetadataParam, GetScheduledTasksIdMetadataParam, GetScheduledTasksMetadataParam, GetTaskAgentsIdMetadataParam, GetTaskAgentsMetadataParam, GetTaskAssignmentsIdMetadataParam, GetTaskAssignmentsMetadataParam, GetTeamMembersMetadataParam, GetTextBlastsIdMetadataParam, GetTextBlastsMetadataParam, GetTextTemplatesIdMetadataParam, GetTextTemplatesMetadataParam, GetTextbanksIdMetadataParam, GetTextbanksMetadataParam, GetTextsMetadataParam, GetTextsResponse200, GetUserListsIdMetadataParam, GetUserListsMetadataParam, GetUsersMetadataParam, GetUsersResponse200, PostAgentAssignmentsBodyParam, PostEventAttendancesBodyParam, PostEventRsvpsBodyParam, PostEventSessionsBodyParam, PostScheduledTasksBodyParam, PostTaskAgentsBodyParam, PostTaskAssignmentsBodyParam, PostTextTemplatesBodyParam, PostTextsMetadataParam, PostUserActionsBodyParam, PostUserNotesMetadataParam, PostUsersBodyParam, PutAgentAssignmentsIdBodyParam, PutAgentAssignmentsIdMetadataParam, PutEventRsvpsIdBodyParam, PutEventRsvpsIdMetadataParam, PutEventSessionsIdBodyParam, PutEventSessionsIdMetadataParam, PutScheduledTasksIdBodyParam, PutScheduledTasksIdMetadataParam, PutTaskAssignmentsIdBodyParam, PutTaskAssignmentsIdMetadataParam, PutTextTemplatesIdBodyParam, PutTextTemplatesIdMetadataParam, PutUsersIdBodyParam, PutUsersIdMetadataParam } from './types';
