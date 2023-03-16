/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AddNoteRequest } from '../models/add-note-request';
import { DeleteNoteRequest } from '../models/delete-note-request';
import { DeleteNoteResponse } from '../models/delete-note-response';
import { FindNotesByUserIdRequest } from '../models/find-notes-by-user-id-request';
import { FindNotesByUserIdResponse } from '../models/find-notes-by-user-id-response';

@Injectable({
  providedIn: 'root',
})
export class NoteService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNoteUserIdGet
   */
  static readonly ApiNoteUserIdGetPath = '/api/Note/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNoteUserIdGet$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteUserIdGet$Plain$Response(params: {
    userId: string;
    body?: FindNotesByUserIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FindNotesByUserIdResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NoteService.ApiNoteUserIdGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {"style":"simple"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FindNotesByUserIdResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNoteUserIdGet$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteUserIdGet$Plain(params: {
    userId: string;
    body?: FindNotesByUserIdRequest
  },
  context?: HttpContext

): Observable<FindNotesByUserIdResponse> {

    return this.apiNoteUserIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<FindNotesByUserIdResponse>) => r.body as FindNotesByUserIdResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNoteUserIdGet$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteUserIdGet$Json$Response(params: {
    userId: string;
    body?: FindNotesByUserIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FindNotesByUserIdResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NoteService.ApiNoteUserIdGetPath, 'get');
    if (params) {
      rb.path('userId', params.userId, {"style":"simple"});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FindNotesByUserIdResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNoteUserIdGet$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteUserIdGet$Json(params: {
    userId: string;
    body?: FindNotesByUserIdRequest
  },
  context?: HttpContext

): Observable<FindNotesByUserIdResponse> {

    return this.apiNoteUserIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<FindNotesByUserIdResponse>) => r.body as FindNotesByUserIdResponse)
    );
  }

  /**
   * Path part for operation apiNotePost
   */
  static readonly ApiNotePostPath = '/api/Note';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotePost$Plain$Response(params?: {
    body?: AddNoteRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddNoteRequest>> {

    const rb = new RequestBuilder(this.rootUrl, NoteService.ApiNotePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddNoteRequest>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotePost$Plain(params?: {
    body?: AddNoteRequest
  },
  context?: HttpContext

): Observable<AddNoteRequest> {

    return this.apiNotePost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddNoteRequest>) => r.body as AddNoteRequest)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNotePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotePost$Json$Response(params?: {
    body?: AddNoteRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AddNoteRequest>> {

    const rb = new RequestBuilder(this.rootUrl, NoteService.ApiNotePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AddNoteRequest>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNotePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNotePost$Json(params?: {
    body?: AddNoteRequest
  },
  context?: HttpContext

): Observable<AddNoteRequest> {

    return this.apiNotePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AddNoteRequest>) => r.body as AddNoteRequest)
    );
  }

  /**
   * Path part for operation apiNoteDelete
   */
  static readonly ApiNoteDeletePath = '/api/Note';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNoteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteDelete$Plain$Response(params?: {
    body?: DeleteNoteRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DeleteNoteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NoteService.ApiNoteDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeleteNoteResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNoteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteDelete$Plain(params?: {
    body?: DeleteNoteRequest
  },
  context?: HttpContext

): Observable<DeleteNoteResponse> {

    return this.apiNoteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DeleteNoteResponse>) => r.body as DeleteNoteResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNoteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteDelete$Json$Response(params?: {
    body?: DeleteNoteRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DeleteNoteResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NoteService.ApiNoteDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DeleteNoteResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNoteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiNoteDelete$Json(params?: {
    body?: DeleteNoteRequest
  },
  context?: HttpContext

): Observable<DeleteNoteResponse> {

    return this.apiNoteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DeleteNoteResponse>) => r.body as DeleteNoteResponse)
    );
  }

}
