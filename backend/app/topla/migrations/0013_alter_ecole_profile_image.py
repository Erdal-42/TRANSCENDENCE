# Generated by Django 4.2.3 on 2024-03-04 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topla', '0012_alter_ecole_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ecole',
            name='profile_image',
            field=models.ImageField(default='profile_images/default.jpg', upload_to='profile_images/'),
        ),
    ]
