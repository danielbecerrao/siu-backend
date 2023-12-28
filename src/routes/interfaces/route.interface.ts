export interface RouteInterface {
  ROUTE_ID: number;
  ROUTE_NAME: string;
  DATE: string;
  FREQUENCY: string;
  START_HOUR: string;
  END_HOUR: string;
  CLIENT_ID: number;
  CLIENT_NAME: string;
  TRIPS: Array<{
    TRIP_ID: number;
    TRIP_NAME: string;
    THEORIC_START_HOUR: string;
    THEORIC_END_HOUR: string;
    VEHICLE_ID: number;
    DRIVER_ID: number;
  }>;
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
