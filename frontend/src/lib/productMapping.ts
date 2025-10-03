// Mapping between API product names and frontend display data
import mangoBottle from "@/assets/mango-bottle.png";
import orangeImage from "@/assets/orange.png";
import pineappleImage from "@/assets/pineapple.png";
import jeeraImage from "@/assets/jeera.jpg";
import lichiImage from "@/assets/lichi.png";
import nimbuImage from "@/assets/nimbu.jpg";

export interface FlavourDisplayData {
  image: string;
  color: string;
  fallbackDescription?: string;
}

// Map product names/slugs to display data
export const productDisplayMapping: Record<string, FlavourDisplayData> = {
  // API product names to frontend display
  'orange-fresh': {
    image: orangeImage,
    color: 'fresh-orange',
  },
  'berry-blast': {
    image: lichiImage, // Using lichi as placeholder for berry
    color: 'fresh-lichi',
  },
  'tropical-paradise': {
    image: pineappleImage,
    color: 'fresh-pineapple',
  },
  'green-energy': {
    image: jeeraImage,
    color: 'fresh-jeera',
  },
  'lemon-mint-cooler': {
    image: nimbuImage,
    color: 'fresh-nimbu',
  },
  // Legacy mappings for existing flavours
  'mango': {
    image: mangoBottle,
    color: 'fresh-mango',
    fallbackDescription: 'Permitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)',
  },
  'jeera': {
    image: jeeraImage,
    color: 'fresh-jeera',
    fallbackDescription: 'Permitted natural and synthetic food colour(s) (INS-150D, INS-102, INS-110, INS-122, INS-133) and added (Masala Soda) flavour(s) (natural, nature identical and artificial flavouring substances)',
  },
  'lichi': {
    image: lichiImage,
    color: 'fresh-lichi',
    fallbackDescription: 'Added (LICHI) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances)',
  },
  'pineapple': {
    image: pineappleImage,
    color: 'fresh-pineapple',
    fallbackDescription: 'Permitted Synthetic Food Colour(S) (INS-102) and Added (Pineapple) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)',
  },
  'orange': {
    image: orangeImage,
    color: 'fresh-orange',
    fallbackDescription: 'Permitted Synthetic Food Colour(S) (INS-102, INS-124) and Added (Orange) Flavour(S) (Natural, Nature Indentical and Artificial Flavouring Substances)',
  },
  'nimbu': {
    image: nimbuImage,
    color: 'fresh-nimbu',
    fallbackDescription: 'Nimbu beverage crafted with premium ingredients: Acidity Regulator (INS-330, INS-297), Emulsifiers & Stabilizers (INS-414, INS-331), Edible Oils, Class II Preservatives (INS-211), Permitted Anti Caking Agent (INS-554), Added (Nimboo) Flavour(S) (Natural, Nature Identical and Artificial Flavouring Substances).',
  },
};

// Get display data for a product
export const getProductDisplayData = (slug: string, name: string): FlavourDisplayData => {
  const displayData = productDisplayMapping[slug.toLowerCase()] || productDisplayMapping[name.toLowerCase()];
  
  if (displayData) {
    return displayData;
  }
  
  // Default fallback
  return {
    image: mangoBottle, // Default image
    color: 'fresh-mango', // Default color
  };
};