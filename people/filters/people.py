from django.core.validators import MinLengthValidator
from django_filters import rest_framework as filters

from people.models import Person


class PersonFilterSet(filters.FilterSet):
    first_name = filters.CharFilter(lookup_expr="icontains", validators=(MinLengthValidator(2),))
    last_name = filters.CharFilter(lookup_expr="icontains")

    class Meta:
        model = Person
        fields = ("first_name", "last_name", "city")
