export interface Product {
  id: string;
  name: string;
  category: 'Skincare' | 'Makeup' | 'Haircare' | 'Bodycare' | 'Sun Care' | 'Gift Sets';
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  skinType: 'All' | 'Oily' | 'Dry' | 'Sensitive' | 'Combination';
  benefits: string[];
  ingredients: string;
  volume: string;
  ritual: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  categorySlug: Product['category'];
  description: string;
  productCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Skincare Rituals' | 'Ingredient Science' | 'Brand Stories' | 'Beauty Philosophy';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export type Page = 'home' | 'shop' | 'collections' | 'about' | 'blog' | 'contact';
