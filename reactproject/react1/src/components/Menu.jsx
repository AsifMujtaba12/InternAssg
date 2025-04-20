// Menu Component
import React from "react";
function Menu() {
    return (
      <section className="menu" id="menu">
        <h2>Our Menu</h2>
        <div className="menu-items">
          <div className="item">
            <h3>Butter Chicken</h3>
            <p>Rich, creamy, and full of flavor.</p>
          </div>
          <div className="item">
            <h3>Paneer Tikka</h3>
            <p>Grilled cottage cheese marinated in spices.</p>
          </div>
          <div className="item">
            <h3>Veg Biryani</h3>
            <p>Fragrant rice cooked with vegetables and spices.</p>
          </div>
        </div>
      </section>
    );
  }

  export default Menu