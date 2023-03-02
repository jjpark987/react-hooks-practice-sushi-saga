import React, { useState } from "react";

function Sushi({ sushi, onAddPlate, onCalculateBill, budget }) {
  const [consumed, setConsumed] = useState(false);
  function handleClick() {
    if(budget - sushi.price > 0) {
      setConsumed(true)
      onAddPlate()
      onCalculateBill(sushi.price)
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {consumed ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
