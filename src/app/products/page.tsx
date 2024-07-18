import Link from "next/link"
function Products(){
    return(
        <>
        <h1>product1</h1><br />
        <h1>product2</h1><br />
        <h1>product3</h1><br />
        <Link href="/">home</Link><br />
        <Link href="/about">about</Link><br />
        <Link href="/products">products</Link>
        </>
    )
}
export default Products