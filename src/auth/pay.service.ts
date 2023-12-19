import { BadRequestException, Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import { catchError, firstValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpService } from '@nestjs/axios';
import type { ApiPayResponse } from './interfaces/api-pay-response.interface';
import type { AxiosError } from 'axios';
import type { FareInterface } from 'src/fares/interface/fare.interface';
import type {
  RouteInterface,
  RouteDetailInterface,
} from 'src/routes/interfaces/route.interface';
import type { GeozoneInterface } from 'src/geozones/interfaces/geozone.interface';

config({ path: '.env' });

const credentials = {
  url: process.env.PAY_URL,
  username: process.env.PAY_USERNAME,
  password: process.env.PAY_PASSWORD,
};

@Injectable()
export class PayService {
  public constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
  ) {}

  public async payLogin(): Promise<ApiPayResponse> {
    const url: string = `${credentials.url}/auth/login`;
    const requestBody = {
      user: credentials.username,
      pass: credentials.password,
    };
    const { data } = await firstValueFrom(
      this.httpService
        .post<ApiPayResponse>(url, requestBody, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }

  //FARES
  public async getAllFares(accessToken: string): Promise<FareInterface> {
    const url: string = `${credentials.url}/FARE`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<FareInterface>(url, {
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }

  public async getOneFare(
    id: number,
    accessToken: string,
  ): Promise<FareInterface> {
    const url: string = `${credentials.url}/FARE/${id}`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<FareInterface>(url, {
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }

  //ROUTES
  public async getAllRoutes(accessToken: string): Promise<RouteInterface> {
    const url: string = `${credentials.url}/ROUTE`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<RouteInterface>(url, {
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }

  public async getOneRoute(
    id: number,
    accessToken: string,
  ): Promise<RouteInterface> {
    const url: string = `${credentials.url}/ROUTE/${id}`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<RouteInterface>(url, {
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }

  public async getOneRouteDetail(
    id: number,
    accessToken: string,
  ): Promise<RouteDetailInterface> {
    const url: string = `${credentials.url}/ROUTE_DETAIL/BY_ROUTE_ID/${id}`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<RouteDetailInterface>(url, {
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }

  //GEOZONES
  public async getAllGeozones(accessToken: string): Promise<GeozoneInterface> {
    const url: string = `${credentials.url}/GEO_ZONE`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<GeozoneInterface>(url, {
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }

  public async getOneGeozone(
    id: number,
    accessToken: string,
  ): Promise<GeozoneInterface> {
    const url: string = `${credentials.url}/GEO_ZONE/${id}`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<GeozoneInterface>(url, {
          headers: {
            authorization: 'Bearer ' + accessToken,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error);
          }),
        ),
    );
    return data;
  }
}
