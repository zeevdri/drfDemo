from django.core.management.base import BaseCommand

from people.models import City, Person


class Command(BaseCommand):
    help = "Generates data for testing"

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        haifa = City.objects.create(name="Haifa")
        Person.objects.create(first_name="Ze'ev", last_name="Dreifuss", city=haifa)
        Person.objects.create(first_name="Moshe", last_name="Baraba", city=haifa)

        tel_aviv = City.objects.create(name="Tel-Aviv")
        Person.objects.create(first_name="Idan", last_name="Nachum", city=tel_aviv)
        Person.objects.create(first_name="Idan1", last_name="Nachum1", city=tel_aviv)
        Person.objects.create(first_name="Idan2", last_name="Nachum2", city=tel_aviv)
        Person.objects.create(first_name="Idan3", last_name="Nachum3", city=tel_aviv)
        Person.objects.create(first_name="Idan4", last_name="Nachum4", city=tel_aviv)
        Person.objects.create(first_name="Idan5", last_name="Nachum5", city=tel_aviv)
        Person.objects.create(first_name="Idan6", last_name="Nachum6", city=tel_aviv)
        Person.objects.create(first_name="Idan7", last_name="Nachum7", city=tel_aviv)

        eilat = City.objects.create(name="Eilat")
