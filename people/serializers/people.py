from rest_framework import serializers

from people.models import Person
from people.serializers.cities import CitySerializer


class PersonSerializer(serializers.ModelSerializer):
    # city = serializers.CharField(source="city.name")
    city = CitySerializer()

    class Meta:
        model = Person
        fields = ("id", "first_name", "last_name", "city")
        read_only_fields = fields


