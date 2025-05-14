import React from "react";
import ProductItemInfo from "./ProductItemInfo";
import ProductItemSwiper from "./ProductItemSwiper";
import "./ProductItemSwiperInfo.css";
import {ProductData} from "../../../utils/getProductData";

interface Props {
  productData: ProductData;
}

const ProductItemSwiperInfo: React.FC<Props> = ({productData}) => {
  return (
    <section className="container">
      <div className="ProductItemSwiperInfo">
        <ProductItemSwiper productData={productData} />
        <ProductItemInfo productData={productData} />
      </div>
    </section>
  );
};

export default ProductItemSwiperInfo;
