import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ allSushi, onAddPlate, onCalculateBill, budget }) {
  const [arrayStart, setArrayStart] = useState(0);

  return (
    <div className="belt">
      {allSushi.slice(arrayStart, arrayStart + 4).map(sushi => 
        <Sushi 
          key={sushi.id} 
          sushi={sushi} 
          onAddPlate={onAddPlate} 
          onCalculateBill={onCalculateBill} 
          budget={budget} 
        />
      )}
      <MoreButton onSetArrayStart={() => setArrayStart(arrayStart + 4)} />
    </div>
  );
}

export default SushiContainer;