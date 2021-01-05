import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

import { InlineResponse200 } from '../models/InlineResponse200';
import { Person } from '../models/Person';
import { PersonCity } from '../models/PersonCity';

import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";
export class ObservableApiApi {
    private requestFactory: ApiApiRequestFactory;
    private responseProcessor: ApiApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiApiRequestFactory,
        responseProcessor?: ApiApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApiApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApiApiResponseProcessor();
    }

    /**
     * @param page A page number within the paginated result set.
     * @param firstName first_name
     * @param lastName last_name
     * @param city city
     */
    public listPersons(page?: number, firstName?: string, lastName?: string, city?: string, options?: Configuration): Observable<InlineResponse200> {
    	const requestContextPromise = this.requestFactory.listPersons(page, firstName, lastName, city, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPersons(rsp)));
	    	}));
    }
	
    /**
     * @param id A unique integer value identifying this person.
     * @param firstName first_name
     * @param lastName last_name
     * @param city city
     */
    public retrievePerson(id: string, firstName?: string, lastName?: string, city?: string, options?: Configuration): Observable<Person> {
    	const requestContextPromise = this.requestFactory.retrievePerson(id, firstName, lastName, city, options);

		// build promise chain
    let middlewarePreObservable = from<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.retrievePerson(rsp)));
	    	}));
    }
	

}



