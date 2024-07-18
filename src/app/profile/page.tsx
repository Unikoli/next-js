import Link from "next/link"
function Profile(){
    return(
        <>
         <h1>profile</h1>
         <h3>profile</h3>
         <Link href="/">home</Link><br />
        <Link href="/about">profile</Link><br />
        <Link href="/products">products</Link>
        </>
       
    )
  }
  export default Profile