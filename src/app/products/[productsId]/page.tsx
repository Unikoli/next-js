// "use client";
// import { useRouter } from "next/router"
// function Productsdetails(){
//     const router=useRouter()
//     // const productid=router.query.productIds
//     const productId = router.query.productId as string;
//     return(
//         <>
//         <h1>welcome to product details {productId}</h1>
       
//         </>
//     )
// }
// export default Productsdetails
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ProductDetails() {
  const router = useRouter();
  const [productId, setProductId] = useState<string | null>(null);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const id = pathParts[pathParts.length - 1];
    setProductId(id);
  }, []);

  if (!productId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}

export default ProductDetails;
