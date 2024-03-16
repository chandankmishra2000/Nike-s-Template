import React from 'react'

export default function Hero() {
    return (
        <main className='hero container'>
            <div className="hero-content">
                <h1>"Walk a mile in their shoes to understand a lifetime in a step."</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO
                     HELP YOU WITH OUR SHOES.YOUR FEET DESRVE THE 
                     BEST AND WE ARE HERE TO HEPLP YOU WITH OUR SHOES.</p>

                     <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className='secondary-btn'>Category</button>
                     </div>
                     <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icon">
                            <img src="images/Amazon.png" alt="amazon-logo"  />
                            <img src="images/flipkart.png" alt="flipkart-logo"  />
                        </div>
                     </div>
            </div>
            <div className="hero-image">
            <img src="images/shoes.png" alt="shoes-logo"  />
            </div>
        </main>
    )
}
