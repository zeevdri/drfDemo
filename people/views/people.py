"""
1. Implement PersonSerializer
2. Implement PersonViewSet
   - talk about actions (readonly/write), list_route, detail_route
     - list
     - retreive
     - create
     - delete
     - update
   - people/fullname endpoint
3. add to urls
4. add PersonSerializer.city_name
5  add CitySerializer nested
6. add paging
7. add filtering
   - by first_name, last_name
8. auto client code creation
   - openapi/ endpoint
   - schema generation
     - run ./manage.py generateschema --file ./client/schema/openapi-schema.yml
   - client code generation
     - nvm use v14; node ./node_modules/.bin/openapi-generator-cli generate -i ./client/schema/openapi-schema.yml -o ./client/src -g typescript-axios
     - ts-node -i
       > import { ApiApiFactory } from "./client/src";
       > let api = ApiApiFactory(undefined, "http://127.0.0.1:8000");
       > api.listPersons().then(r => console.info(r.data));
"""
from rest_framework import viewsets, pagination

from people.models import Person
from people.serializers.people import PersonSerializer
from people.filters.people import PersonFilterSet


class PersonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    pagination_class = pagination.PageNumberPagination
    # filterset_fields = ("first_name", "last_name",)
    filterset_class = PersonFilterSet
