import React from 'react'
import "./Beverages.css"

const Beverages = () => {
    return (
        <div className="Beverages">
          <h2>Menu</h2>
          {/* <section>
            <h3>Crepes</h3>
            <ul>
              <li>Classic Crepe: Soft and warm crepe with a light dusting of powdered sugar and a slice of lemon. <span className="price">$5.00</span></li>
              <li>Nutella & Banana Crepe: Lush Nutella spread with fresh banana slices, topped with whipped cream. <span className="price">$7.50</span></li>
              <li>Savory Crepe: Filled with ham, cheese, and a sunny-side-up egg, served with a side of mixed greens. <span className="price">$8.00</span></li>
            </ul>
          </section> */}
          <section>
            <h3>Drinks</h3>
            <ul>
              <li>Soft Drink <span className="price">100.000 LL</span></li>
              <li>Small Water <span className="price">50.000 LL</span></li>
              <li>Bonjus <span className="price">50.000 LL</span></li>
            </ul>
          </section>
          {/* <section>
            <h3>Cupschrista</h3>
            <ul>
              <li>Strawberry Cupschrista: Light, fluffy sponge cake topped with fresh strawberries and cream. <span className="price">$6.00</span></li>
              <li>Chocolate Cupschrista: Rich chocolate sponge with a gooey center, adorned with chocolate shavings. <span className="price">$6.50</span></li>
              <li>Vanilla Cupschrista: Classic vanilla sponge cake with a hint of almond, topped with vanilla buttercream. <span className="price">$6.00</span></li>
            </ul>
          </section> */}
        </div>
    );
}

export default Beverages
