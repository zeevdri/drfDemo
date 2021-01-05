// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { InlineResponse200 } from '../models/InlineResponse200';
import { Person } from '../models/Person';

/**
 * no description
 */
export class ApiApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * @param page A page number within the paginated result set.
     * @param firstName first_name
     * @param lastName last_name
     * @param city city
     */
    public async listPersons(page?: number, firstName?: string, lastName?: string, city?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		// Path Params
    	const localVarPath = '/api/v1/people/';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }
        if (firstName !== undefined) {
        	requestContext.setQueryParam("first_name", ObjectSerializer.serialize(firstName, "string", ""));
        }
        if (lastName !== undefined) {
        	requestContext.setQueryParam("last_name", ObjectSerializer.serialize(lastName, "string", ""));
        }
        if (city !== undefined) {
        	requestContext.setQueryParam("city", ObjectSerializer.serialize(city, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

    /**
     * @param id A unique integer value identifying this person.
     * @param firstName first_name
     * @param lastName last_name
     * @param city city
     */
    public async retrievePerson(id: string, firstName?: string, lastName?: string, city?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling retrievePerson.');
        }

		
		
		
		
		// Path Params
    	const localVarPath = '/api/v1/people/{id}/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (firstName !== undefined) {
        	requestContext.setQueryParam("first_name", ObjectSerializer.serialize(firstName, "string", ""));
        }
        if (lastName !== undefined) {
        	requestContext.setQueryParam("last_name", ObjectSerializer.serialize(lastName, "string", ""));
        }
        if (city !== undefined) {
        	requestContext.setQueryParam("city", ObjectSerializer.serialize(city, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        // Apply auth methods

        return requestContext;
    }

}



export class ApiApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPersons
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listPersons(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retrievePerson
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retrievePerson(response: ResponseContext): Promise<Person > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Person = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Person", ""
            ) as Person;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Person = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Person", ""
            ) as Person;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}
