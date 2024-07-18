// // import Link from "next/link"
// // function Hoome(){
// //   return(
// //       <>
// //        <h1>welcome to home page</h1>
// //     <Link href="/blog">blog</Link>
// //     <Link href="/blog/firstblog">first blog</Link><br />
// //     <Link href="/blog/secondblog">second blog</Link><br />
// //     <Link href="/about">about</Link><br />
// //     <Link href="/products/2/review/3">products and review id</Link><br />
// //     <Link href="/profile">profile</Link><br />
    
// //       </>
     
// //   )
// // }
// // export default Hoome
// import Link from "next/link";

// function Hoome() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
//         <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Welcome to the Home Page</h1>
//         <nav className="space-y-4">
//           <Link href="/blog">
//             <a className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Blog</a>
//           </Link>
//           <Link href="/blog/firstblog">
//             <a className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">First Blog</a>
//           </Link>
//           <Link href="/blog/secondblog">
//             <a className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Second Blog</a>
//           </Link>
//           <Link href="/about">
//             <a className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">About</a>
//           </Link>
//           <Link href="/products/2/review/3">
//             <a className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Products and Review ID</a>
//           </Link>
//           <Link href="/profile">
//             <a className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Profile</a>
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Hoome;
import Link from "next/link";
import './globals.css'



function Hoome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Welcome to the Home Page</h1>
        <nav className="space-y-4">
          <Link href="/blog">
            <span className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Blog</span>
          </Link>
          <Link href="/blog/firstblog">
            <span className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">First Blog</span>
          </Link>
          <Link href="/blog/secondblog">
            <span className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Second Blog</span>
          </Link>
          <Link href="/about">
            <span className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">About</span>
          </Link>
          <Link href="/products/2/review/3">
            <span className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Products and Review ID</span>
          </Link>
          <Link href="/profile">
            <span className="block text-lg text-blue-500 hover:text-blue-700 transition duration-200">Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Hoome;
