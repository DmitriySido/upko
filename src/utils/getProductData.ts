import productData from "../components/products/ProductsGrid/productData";

export interface ProductData {
  id?: string;
  index: number;
  img: string;
  imgHover: string;
  title: string;
  price: string;
  newPrice?: string; 
  slug: string;
  description?: { 
    main?: string;
    material?: string;
    design?: string;
    size?: {
      main?: string;
      details?: string[];
    };
  };
  images?: string[];
}

export const getProductDataByIndex = (
  index: number
): ProductData | undefined => {
  console.log(productData.find((p) => p.index === index))
  return productData.find((p) => p.index === index);
};

export default getProductDataByIndex;