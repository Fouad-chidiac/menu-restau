import React from 'react'
import "./Desert.css"
const Desert = () => {
    return (
        <div className="Desert">
          <h2>Menu</h2>
          <section>
            <h3>Crepes</h3>
            <ul>
              <li>Chocolat Crepe <span className="price">350.000 LL</span></li>
              <li>Nutella Crepe <span className="price">450.000 LL</span></li>
              <li>Dark Chocolate Crepe <span className="price">450.000 LL</span></li>
              <li>white Chocolate Crepe <span className="price">450.000 LL</span></li>
              <li>Lotus Crepe <span className="price">450.000 LL</span></li>
              <li>Hershey's Crepe <span className="price">500.000 LL</span></li>
              <li>kinder Crepe <span className="price">500.000 LL</span></li>
              <li>Brownie Crepe <span className="price">500.000 LL</span></li>
              <li>Sandwich Crepe <span className="price">600.000 LL</span></li>
              <li>Dubai Crepe <span className="price">600.000 LL</span></li>
              <li>Fettuccine Crepe <span className="price">700.000 LL</span></li>
              <li>Christa Crepe <span className="price">800.000 LL</span></li>
              <li>Sushi Crepe <span className="price">600.000 LL</span></li>
              <li>Pancake Crepe <span className="price">500.000 LL</span></li>


            </ul>
          </section>
          <section>
            <h3>Additions</h3>
            <ul>
              <li>Banana <span className="price">100.000 LL</span></li>
              <li>Strawberry <span className="price">100.000 LL</span></li>
              <li>Oreo <span className="price">100.000 LL</span></li>
              <li>Kinder <span className="price">100.000 LL</span></li>
              <li>M&M <span className="price">100.000 LL</span></li>
              <li>KitKat <span className="price">100.000 LL</span></li>
              <li>Pistachio <span className="price">100.000 LL</span></li>
              <li>Cream <span className="price">100.000 LL</span></li>

            </ul>
          </section>
          <section>
            <h3>Cupschrista</h3>
            <ul>
              <li><span className='Desert_cups_christa'>Mix Cup:</span><span className="Desert_description"> Nutella chocolate, banana, Kinder, Oreo, Lotus, whipped cream.</span> <span className="price">600.000 LL</span></li>
              <li><span className='Desert_cups_christa'>Fruit Cup:</span><span className="Desert_description"> Nutella chocolate, strawberry, banana, whipped cream.</span> <span className="price">500.000 LL</span></li>
              <li><span className='Desert_cups_christa'>Christa Cup:</span><span className="Desert_description"> Nutella chocolate, banana, Kinder, Lotus, Mallesers, whipped cream.</span> <span className="price">600.000 LL</span></li>
            </ul>
          </section>
        </div>
    );
}


export default Desert
