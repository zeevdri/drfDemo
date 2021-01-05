"""
1. Implement PersonSerializer
2. Implement PersonViewSet
3. add paging
4. add filtering
5. auto client code creation
"""
from rest_framework import viewsets

from people.models import Person
from people.serializers.people import PersonSerializer


class PersonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
