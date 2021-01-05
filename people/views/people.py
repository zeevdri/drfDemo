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
from rest_framework import viewsets

from people.models import Person
from people.serializers.people import PersonSerializer


class PersonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
