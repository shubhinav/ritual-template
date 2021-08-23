import "./Main.css"
import ProductCard from "./ProductCard/ProductCard"

export default function Main(){
    return(
        <>
            <div className="product-card-list container">
                <ProductCard text="Multivitamin" src="//images.ctfassets.net/uuc5ok478nyh/28hfBJ1mqho10JHWUltf0X/720c1c1212efc928775e881214f528b8/Category-Multivitamin.jpg?w=580&amp;h=359&amp;fl=progressive&amp;q=90&amp;fm=jpg"/>
                <ProductCard text="Protein" src="//images.ctfassets.net/uuc5ok478nyh/4HeUbLZGWaKoK7JPYdRuWg/0f36a544cda868ee9603f103c9cbefe0/Category-Protein__1_.jpg?w=580&amp;h=359&amp;fl=progressive&amp;q=90&amp;fm=jpg"/>
                <ProductCard text="Pregnancy" src="//images.ctfassets.net/uuc5ok478nyh/59zqn8KhaMI6DcFJ38CnDu/98d1899324e223ceec2f7d1aff84c3ee/Category-Pregnancy__1_.jpg?w=580&amp;h=359&amp;fl=progressive&amp;q=90&amp;fm=jpg"/>
                <ProductCard text="Bundles" src="//images.ctfassets.net/uuc5ok478nyh/2RQ7pdzdW9JmLk0z0shhzM/cb2bdddeb740841de6153bea9e1b7d0f/Category-Bundles.jpg?w=580&amp;h=359&amp;fl=progressive&amp;q=90&amp;fm=jpg"/>
            </div>
        </>
    )
}