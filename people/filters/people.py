from django_filters import rest_framework as filters
from people.models import Person


class PersonFilterSet(filters.FilterSet):
    first_name = filters.CharFilter(lookup_expr="icontains")

    class Meta:
        model = Person
        fields = ("first_name", "last_name",)
