import React from "react";
import {useParams} from "react-router-dom";
import ProductItemSwiperInfo from "../components/productItem/ProductItemSwiper/ProductItemSwiperInfo";
import ProductDescription from "../components/productItem/ProductDescription/ProductDescription";
import getProductDataByIndex from "../utils/getProductData";

// import ProductItemSwiper from "../components/productItem/Pro2ductItemSwiper";

const ProductItemPage: React.FC = () => {
  const {index} = useParams<{index: string}>();
  const productData = getProductDataByIndex(Number(index));

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      {/* <div className="container product-item__container"> */}
      {/* <ProductItemSwiper /> */}
      <ProductItemSwiperInfo productData={productData} />
      <ProductDescription productData={productData} />
      {/* <ExperianCheck /> */}
      {/* <ProductItem /> */}
      {/* <ProductItem /> */}
      {/* </div> */}
    </main>
  );
};

export default ProductItemPage;
