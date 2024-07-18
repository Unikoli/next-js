import Link from "next/link"
function About(){
    return(
        <>
        <h1>welcome to about page</h1><br />
        <Link href="/">home</Link><br />
        <Link href="/profile">profile</Link><br />
        <Link href="/products">products</Link>
        
        </>
       
    )
}
export default About