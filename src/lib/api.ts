// API configuration and service functions
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// API service class
class ApiService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Contact API
  async submitContactForm(formData: ContactFormData): Promise<ContactResponse> {
    return this.request<ContactResponse>('/contact/submit/', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  }

  // Products API
  async getProducts(params?: ProductsParams): Promise<ProductsResponse> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.append('category', params.category);
    if (params?.featured) searchParams.append('featured', 'true');
    if (params?.search) searchParams.append('search', params.search);
    
    const queryString = searchParams.toString();
    const endpoint = `/products/${queryString ? `?${queryString}` : ''}`;
    
    return this.request<ProductsResponse>(endpoint);
  }

  async getProduct(slug: string): Promise<ProductDetailResponse> {
    return this.request<ProductDetailResponse>(`/products/${slug}/`);
  }

  async getCategories(): Promise<CategoriesResponse> {
    return this.request<CategoriesResponse>('/products/categories/');
  }

  async getFeaturedProducts(): Promise<ProductsResponse> {
    return this.request<ProductsResponse>('/products/featured/');
  }
}

// Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  success: boolean;
  data?: {
    id: number;
    name: string;
    email: string;
    subject: string;
    created_at: string;
  };
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: {
    id: number;
    name: string;
  };
  short_description: string;
  price: string;
  is_in_stock: boolean;
  featured: boolean;
  primary_image: string | null;
}

export interface ProductDetail extends Product {
  description: string;
  wholesale_price: string;
  inventory_count: number;
  is_low_stock: boolean;
  images: Array<{
    id: number;
    image: string;
    alt_text: string;
    is_primary: boolean;
  }>;
  ingredients: Array<{
    id: number;
    name: string;
    percentage: string | null;
    is_natural: boolean;
  }>;
  created_at: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface ProductDetailResponse {
  product: ProductDetail;
}

export interface CategoriesResponse {
  categories: Category[];
}

export interface ProductsParams {
  category?: string;
  featured?: boolean;
  search?: string;
}

// Create and export API instance
export const api = new ApiService(API_BASE_URL);

// Export individual functions for convenience
export const {
  submitContactForm,
  getProducts,
  getProduct,
  getCategories,
  getFeaturedProducts,
} = api;