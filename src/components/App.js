import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends React.Component {

  state = {
    items: itemData,
    isDarkMode: false,
  }

  handleDarkModeClick() {
    return (this.state.isDarkMode = !isDarkMode);
  }

  render() {
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={state.items} />
    </div>
  );
  }
}

export default App;
