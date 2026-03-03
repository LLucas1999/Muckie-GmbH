from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
 
from .models import Product
from .serializers import ProductAPISerializer
# Create your views here.
 
class ProductListView(APIView):
   
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductAPISerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
 
class ProductDetailView(APIView):
 
    def get(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductAPISerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)
   
    def put(self, request, pk):
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductAPISerializer(product, data=request.data, partial=True)
       
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.errors, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    def delete(self, request, pk):
        product = get_object_or_404(product, pk=pk)
        product.delete()
        return Response(
            {"message": f"Produkt mit ID {pk} wurde erfolgreich gelöscht."},
            status=status.HTTP_204_No_CONTENT,
        )
class ProductCreateView(APIView):

    def post(self, request):
        serializer = ProductAPISerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Hier stand vorher .dave()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)