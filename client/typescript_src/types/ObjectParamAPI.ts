import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { InlineResponse200 } from '../models/InlineResponse200';
import { Person } from '../models/Person';
import { PersonCity } from '../models/PersonCity';

import { ObservableApiApi } from "./ObservableAPI";
import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";

export interface ApiApiListPersonsRequest {
    /**
     * A page number within the paginated result set.
     * @type number
     * @memberof ApiApilistPersons
     */
    page?: number
    /**
     * first_name
     * @type string
     * @memberof ApiApilistPersons
     */
    firstName?: string
    /**
     * last_name
     * @type string
     * @memberof ApiApilistPersons
     */
    lastName?: string
    /**
     * city
     * @type string
     * @memberof ApiApilistPersons
     */
    city?: string
}

export interface ApiApiRetrievePersonRequest {
    /**
     * A unique integer value identifying this person.
     * @type string
     * @memberof ApiApiretrievePerson
     */
    id: string
    /**
     * first_name
     * @type string
     * @memberof ApiApiretrievePerson
     */
    firstName?: string
    /**
     * last_name
     * @type string
     * @memberof ApiApiretrievePerson
     */
    lastName?: string
    /**
     * city
     * @type string
     * @memberof ApiApiretrievePerson
     */
    city?: string
}


export class ObjectApiApi {
    private api: ObservableApiApi

    public constructor(configuration: Configuration, requestFactory?: ApiApiRequestFactory, responseProcessor?: ApiApiResponseProcessor) {
        this.api = new ObservableApiApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * @param param the request object
     */
    public listPersons(param: ApiApiListPersonsRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.listPersons(param.page, param.firstName, param.lastName, param.city,  options).toPromise();
    }
	
    /**
     * @param param the request object
     */
    public retrievePerson(param: ApiApiRetrievePersonRequest, options?: Configuration): Promise<Person> {
        return this.api.retrievePerson(param.id, param.firstName, param.lastName, param.city,  options).toPromise();
    }
	

}



