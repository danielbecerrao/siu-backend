export interface RouteInterface {
  ID: number;
  CLIENT_ID: number;
  ROUTE_TYPE_ID: number;
  ROUTE_GROUP_ID: number;
  ROUTE_GEO_ZONE_ID: number;
  CODE: string;
  NAME: string;
  SHORT_NAME: string;
  DESCRIPTION: string;
  IS_ACTIVE: number;
  INITIAL_POINT: number;
  FINAL_POINT: number;
  TRIP_DURATION: number;
  TOTAL_KM: string;
  COURSE: number;
  COLOR: string;
  TEXT_COLOR: string;
  ORDER: number;
  CREATED_AT: Date;
  CREATED_BY: string;
  UPDATED_AT: Date;
  UPDATED_BY: string;
}

export interface RouteDetailInterface {
  ID: number;
  ROUTE_ID: number;
  LOCATION_ID: number;
  NEXT_LOCATION_ID: number | null;
  ORDER: number;
  DISTANCE: number;
  TRACK_TIME: number;
  IS_CHECKPOINT: number;
  CREATED_AT: Date;
  CREATED_BY: string;
  UPDATED_AT: Date;
  UPDATED_BY: string;
}
