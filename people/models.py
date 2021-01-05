from django.core.validators import MinLengthValidator
from django.db import models


class City(models.Model):
    name = models.CharField(null=False, blank=False, editable=True, db_index=True,
                            max_length=100, validators=(MinLengthValidator(2, "city name must be at least 2 characters long"),),
                            help_text="the name of the city")

    def __repr__(self):
        return f'<{self.__class__.__name__}: #{self.pk} \'{self}\'>'

    def __str__(self):
        return self.name


class Person(models.Model):
    first_name = models.CharField(null=False, blank=False, editable=True, db_index=True,
                                  max_length=100, validators=(MinLengthValidator(2, "person's first name must be at least 2 characters long"),),
                                  help_text="the first name of the person")
    last_name = models.CharField(null=False, blank=False, editable=True, db_index=True,
                                 max_length=100, validators=(MinLengthValidator(2, "person's last name must be at least 2 characters long"),),
                                 help_text="the last name of the person")
    city = models.ForeignKey("City", on_delete=models.CASCADE, related_name="people", db_index=True)

    class Meta:
        index_together = (("first_name", "last_name"),)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"

    def __repr__(self):
        return f'<{self.__class__.__name__}: #{self.pk} \'{self}\'>'

    def __str__(self):
        return self.full_name
