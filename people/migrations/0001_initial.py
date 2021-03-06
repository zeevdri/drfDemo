# Generated by Django 3.1.5 on 2021-01-05 08:25

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, help_text='the name of the city', max_length=100, validators=[django.core.validators.MinLengthValidator(2, 'city name must be at least 2 characters long')])),
            ],
        ),
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(db_index=True, help_text='the first name of the person', max_length=100, validators=[django.core.validators.MinLengthValidator(2, "person's first name must be at least 2 characters long")])),
                ('last_name', models.CharField(db_index=True, help_text='the last name of the person', max_length=100, validators=[django.core.validators.MinLengthValidator(2, "person's last name must be at least 2 characters long")])),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='people', to='people.city')),
            ],
            options={
                'index_together': {('first_name', 'last_name')},
            },
        ),
    ]
