export interface GeozoneInterface {
  ID: number;
  GEO_ZONE_CATEGORY_ID: number;
  GEO_ZONE_TYPE_ID: number;
  CLIENT_ID: number;
  CODE: string;
  NAME: string;
  DESCRIPTION: string;
  COUNTRY_ID: number;
  STATE_ID: number;
  CITY_ID: number;
  COORDINATES: string;
  SUPPORT_WHEELCHAIR: number;
  IS_ACTIVE: number;
  CREATED_AT: Date;
  CREATED_BY: string;
  UPDATED_AT: Date;
  UPDATED_BY: string;
}
