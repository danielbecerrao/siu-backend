import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
import type { StoryInterface } from 'src/stories/interfaces/story.interface';

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
    const url: string = `${credentials.url}/auth/LOGIN/MOBILE`;
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
        .get<FareInterface | null>(url, {
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
    if (!data) {
      throw new NotFoundException('Error al obtener la Tarifa', {
        cause: new Error(),
        description: 'Tarifa no encontrada por id',
      });
    }
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
        .get<RouteInterface | null>(url, {
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
    if (!data) {
      throw new NotFoundException('Error al obtener la Ruta', {
        cause: new Error(),
        description: 'Ruta no encontrada por id',
      });
    }
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
        .get<GeozoneInterface | null>(url, {
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

    if (!data) {
      throw new NotFoundException('Error al obtener la Geozona', {
        cause: new Error(),
        description: 'Geozona no encontrada por id',
      });
    }
    return data;
  }

  //HISTORIAS
  public async getAllStories(accessToken: string): Promise<StoryInterface> {
    const url: string = `${credentials.url}/STORY`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<StoryInterface>(url, {
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

  public async getAllStoriesByPersonProfile(
    accessToken: string,
    person_profile_id: number,
  ): Promise<StoryInterface> {
    const url: string = `${credentials.url}/STORY/MOBILE`;

    const requestBody = {
      person_profile_id: person_profile_id,
    };
    const { data } = await firstValueFrom(
      this.httpService
        .post<StoryInterface>(url, requestBody, {
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

  public async getOneStory(
    id: number,
    accessToken: string,
  ): Promise<StoryInterface> {
    const url: string = `${credentials.url}/STORY/${id}`;
    const { data } = await firstValueFrom(
      this.httpService
        .get<StoryInterface | null>(url, {
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
    if (!data) {
      throw new NotFoundException('Error al obtener la Historia', {
        cause: new Error(),
        description: 'Historia no encontrada por id',
      });
    }
    return data;
  }
}
