// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import BreadCrums from '../BreadCrums/BreadCrums';
// import ProductDisplay from '../ProductDisplay/ProductDisplay';

// function Product() {
//   const {all_product}= useContext(ShopContext)
//   const {productId} = useParams();
//   const product = all_product.find((e) => e.id === Number(productId));

//   return (
//     <div>
//       <BreadCrums product={product}/>
//       <ProductDisplay product={product}/>
//     </div>
//   )
// }

// export default Product

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrums from '../BreadCrums/BreadCrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { ShopContext } from "../Context/ShopContext"
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
}

export default Product;
