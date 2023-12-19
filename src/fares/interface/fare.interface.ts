export interface FareInterface {
  ID: number;
  CLIENT_ID: number;
  FARE_CATEGORY_ID: number;
  ROUTE_ID: number;
  ROUTE_TRANSFER_ID: number;
  DEFAULT_FARE_TYPE_ID: number;
  DEFAULT_FARE_VALUE: number;
  ALT_FARE_TYPE_ID: number;
  ALT_FARE_VALUE: number;
  TRANSFER_AMOUNT: number;
  NAME: string;
  DESCRIPTION: string;
  GOBAL_UNIT_VALUE: string;
  GOBAL_UNIT_NAME: string;
  CREATED_AT: Date;
  CREATED_BY: string;
  UPDATED_AT: Date;
  UPDATED_BY: string;
}
