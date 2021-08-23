import "./Hero.css"

export default function Hero(){

    return(
        <section className="hero-section">
            <div className="hero-section-content">
                <h1>
                    <div>The future</div>
                    of health
                    <div className="italic">— is clear.</div>
                </h1>
                <button className="hero-btn">Shop All</button>
            </div>
            <div className="hero-section-img">
                <img className="img-desktop" src="//images.ctfassets.net/uuc5ok478nyh/5IMjUB9sibSRJDXXOwa6aV/2477fa4c6b7ed1b755836f0364b8858a/Home-Hero-Desktop.jpg?w=1920&amp;h=747&amp;fl=progressive&amp;q=90&amp;fm=jpg" alt=""/>
                <img className="img-mobile" src="//images.ctfassets.net/uuc5ok478nyh/6dDqtNr4Taao1Qwl4zf6UK/e1141217232b45bdc278746c3a6dcf87/Home-Hero-Mobile.jpg?w=912&amp;h=912&amp;fl=progressive&amp;q=90&amp;fm=jpg" alt=""/>
            </div>
        </section>
    )
}