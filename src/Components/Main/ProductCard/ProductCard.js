import "./ProductCard.css"

export default function ProductCard({text,src}){
    return(
        <div className="product-card">
            <div className="product-card-img">
                <img src={src} alt=""/>
            </div>
            <div className="product-card-name"><span>Shop </span><p>{text}</p></div>
        </div>
    )
}