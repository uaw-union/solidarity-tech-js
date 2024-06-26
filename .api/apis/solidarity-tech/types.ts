import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type GetActivitiesMetadataParam = FromSchema<typeof schemas.GetActivities.metadata>;
export type GetActivitiesResponse200 = FromSchema<typeof schemas.GetActivities.response['200']>;
export type GetCallsMetadataParam = FromSchema<typeof schemas.GetCalls.metadata>;
export type GetCallsResponse200 = FromSchema<typeof schemas.GetCalls.response['200']>;
export type GetChaptersMetadataParam = FromSchema<typeof schemas.GetChapters.metadata>;
export type GetChaptersResponse200 = FromSchema<typeof schemas.GetChapters.response['200']>;
export type GetCustomUserPropertiesMetadataParam = FromSchema<typeof schemas.GetCustomUserProperties.metadata>;
export type GetCustomUserPropertiesResponse200 = FromSchema<typeof schemas.GetCustomUserProperties.response['200']>;
export type GetTextsMetadataParam = FromSchema<typeof schemas.GetTexts.metadata>;
export type GetTextsResponse200 = FromSchema<typeof schemas.GetTexts.response['200']>;
export type GetUsersMetadataParam = FromSchema<typeof schemas.GetUsers.metadata>;
export type GetUsersResponse200 = FromSchema<typeof schemas.GetUsers.response['200']>;
export type PostTextsMetadataParam = FromSchema<typeof schemas.PostTexts.metadata>;
export type PostUserActionsBodyParam = FromSchema<typeof schemas.PostUserActions.body>;
export type PostUserNotesMetadataParam = FromSchema<typeof schemas.PostUserNotes.metadata>;
export type PostUsersBodyParam = FromSchema<typeof schemas.PostUsers.body>;
export type PutUsersIdBodyParam = FromSchema<typeof schemas.PutUsersId.body>;
export type PutUsersIdMetadataParam = FromSchema<typeof schemas.PutUsersId.metadata>;
