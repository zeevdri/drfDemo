from rest_framework import serializers
from people.models import Person, City


class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = ("id", "name",)
        read_only_fields = fields


class PersonSerializer(serializers.ModelSerializer):
    city = serializers.PrimaryKeyRelatedField(queryset=City.objects.all())

    class Meta:
        model = Person
        fields = ("id", "first_name", "last_name", "city")
        read_only_fields = ("id",)
