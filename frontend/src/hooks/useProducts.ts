import { useQuery } from '@tanstack/react-query';
import { getProducts, getProduct, getCategories, getFeaturedProducts, ProductsParams } from '@/lib/api';

// Hook for fetching all products
export const useProducts = (params?: ProductsParams) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for fetching a single product
export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProduct(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for fetching categories
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook for fetching featured products
export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['featured-products'],
    queryFn: getFeaturedProducts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};