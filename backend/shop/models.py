from django.db import models

class Stock(models.Model):
    """
    class for stock
    """
    quantity = models.IntegerField(default=0, verbose_name="stock")
    def __str__(self):
        return f"Stock: {self.quantity}"


class Product(models.Model):
    """
    Contains the information of:
    id, name, short_description, product_description, stock, price
    """
    name = models.CharField(max_length=200, verbose_name="name")
    short_description = models.CharField(max_length=200, verbose_name="short_description")
    product_description = models.CharField(max_length=200, verbose_name="product_description")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="price")

    stock = models.OneToOneField(Stock, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name} {self.price}"