"""
1. Implement PersonSerializer
2. Implement PersonViewSet
3. add to urls
4. add PersonSerializer.city_name
5  add CitySerializer nested
6. add paging
7. add filtering
   - by first_name, last_name
8. auto client code creation
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
