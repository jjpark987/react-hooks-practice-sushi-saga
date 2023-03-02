import React, { useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([]);
  const [plates, setPlates] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setAllSushi(data))
  }, [])

  function calculateBill(sushiPrice) {
    budget - sushiPrice > 0 ? setBudget(budget - sushiPrice) : setBudget(budget);
  }

  return (
    <div className="app">
      <SushiContainer 
        allSushi={allSushi} 
        onAddPlate={() => setPlates([...plates, 1])} 
        onCalculateBill={calculateBill} 
        budget={budget} 
      />
      <Table plates={plates} budget={budget} />
    </div>
  );
}

export default App;