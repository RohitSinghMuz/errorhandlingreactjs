import React from "react";

const App = () => {
  const getdata = () => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ width: "40%", margin: "10px auto" }}>
      <h2>App Page</h2>
      <button onClick={getdata}>Getdata</button>
    </div>
  );
};

export default App;
