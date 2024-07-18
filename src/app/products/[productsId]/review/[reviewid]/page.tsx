
//        "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// function Reviewid() {
//   const router = useRouter();
//   const [productId, setProductId] = useState<string | null>(null);
// //  const {reviewid}=router.query
// const [reviewid, setreviewid] = useState<string | null>(null);

//   useEffect(() => {
//     const pathParts = window.location.pathname.split('/');
//     const id = pathParts[pathParts.length - 1];
//     setProductId(id);
//     setreviewid(id);
//   }, []);

//   if (!productId) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Product Details Page</h1>
//       <p>review ID:{reviewid} proudctid: {productId}</p>
//     </div>
//   );
// }
//         export default Reviewid
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ReviewId() {
  const router = useRouter();
  const [productId, setProductId] = useState<string | null>(null);
  const [reviewId, setReviewId] = useState<string | null>(null);

  useEffect(() => {
    // Assuming the path is /products/[productId]/reviews/[reviewId]
    const pathParts = window.location.pathname.split('/');
    const productIndex = pathParts.indexOf("products") + 1;
    const reviewIndex = pathParts.indexOf("review") + 1;
    if (productIndex && reviewIndex) {
      setProductId(pathParts[productIndex]);
      setReviewId(pathParts[reviewIndex]);
    }
  }, []);

  if (!productId || !reviewId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>  Product ID: {productId} <br />Review ID: {reviewId} </p>
    </div>
  );
}

export default ReviewId;
