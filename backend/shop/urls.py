from django.urls import path
from .views import ProductListView, ProductDetailView, ProductCreateView

urlpatterns = [
    path('products/', ProductListView.as_view(), name='Product-List'),
    path('products/create', ProductCreateView.as_view(), name='Product-Create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='Product-Detail')
]