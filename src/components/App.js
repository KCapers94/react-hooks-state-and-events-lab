import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [backgroundMode, setIsOn] = useState(false);
  const appClass = backgroundMode ? " App dark" : " App light"
  const appClass2 = backgroundMode ? "Dark Mode" : "Light Mode"
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
    function handleClick() {
      setIsOn((mode) => !mode)
    }
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {handleClick}>{appClass2}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
