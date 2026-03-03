from rest_framework import serializers
from .models import Product, Stock

class StockAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['id', 'quantity']

class ProductAPISerializer(serializers.ModelSerializer):
    stock = StockAPISerializer()
    class Meta:
        model = Product

        fields = ['id', 'name', 'short_description', 'product_description', 'stock', 'price']

    def create(self, validated_data):
        stock_data = validated_data.pop('stock')
        stock_obj = Stock.objects.create(**stock_data)
        product = Product.objects.create(stock=stock_obj, **validated_data)
        return Product

    def update(self, instance, validated_data):
        stock_data = validated_data.pop('stock', None)
        
        instance.name = validated_data.get('name', instance.name)
        instance.short_description = validated_data.get('short_description', instance.short_description)
        instance.product_description = validated_data.get('product_description', instance.product_description)
        instance.price = validated_data.get('price', instance.price)
        instance.save()

        if stock_data:
            instance.stock.quantity = stock_data.get('quantity', instance.stock.quantity)
            instance.stock.save()
            
        return instance