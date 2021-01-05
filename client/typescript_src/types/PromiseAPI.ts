import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { InlineResponse200 } from '../models/InlineResponse200';
import { Person } from '../models/Person';
import { PersonCity } from '../models/PersonCity';
import { ObservableApiApi } from './ObservableAPI';


import { ApiApiRequestFactory, ApiApiResponseProcessor} from "../apis/ApiApi";
export class PromiseApiApi {
    private api: ObservableApiApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiApiRequestFactory,
        responseProcessor?: ApiApiResponseProcessor
    ) {
        this.api = new ObservableApiApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param page A page number within the paginated result set.
     * @param firstName first_name
     * @param lastName last_name
     * @param city city
     */
    public listPersons(page?: number, firstName?: string, lastName?: string, city?: string, options?: Configuration): Promise<InlineResponse200> {
    	const result = this.api.listPersons(page, firstName, lastName, city, options);
        return result.toPromise();
    }
	
    /**
     * @param id A unique integer value identifying this person.
     * @param firstName first_name
     * @param lastName last_name
     * @param city city
     */
    public retrievePerson(id: string, firstName?: string, lastName?: string, city?: string, options?: Configuration): Promise<Person> {
    	const result = this.api.retrievePerson(id, firstName, lastName, city, options);
        return result.toPromise();
    }
	

}



