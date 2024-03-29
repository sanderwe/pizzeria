import "./index.css";
import './App.css';
import React, {useState} from "react";
 
function App() {
  const [Name, setDataName]=useState(null);
  const [Street, setDataStreet]=useState(null);
  const [Zip, setDataZip]=useState(null);
  const [City, setDataCity]=useState(null);
 
 
  function getDataName(val){
    setDataName(val.target.value)
  }
 
  function getDataStreet(val){
    setDataStreet(val.target.value)
  }
 
  function getDataZip(val){
    setDataZip(val.target.value)
  }
 
  function getDataCity(val){
    setDataCity(val.target.value)
  }
 
  return (
<div className="App">
      <div class="grid-container">
        <div id="chooseMe">
          <h1>Choose an option</h1>
        </div>
        <div id="delivery-option1">
        <img id="pickup" src="/img/map-pin.svg" alt="map-pin"/>
          <h2>I'm picking it up myself</h2>
          <h3>0kr</h3>
         
        </div>
 
        <div id="delivery-option2">
        <img id="truck" src="/img/truck.svg" alt="delivery-truck"/>
          <h2>Home delivery</h2>
          <h3>50kr</h3>
        </div>
        <div id="button1">
        <button id="buttonsRed">Back to shoppingcart</button>
        </div>
 
       
 
      <div id="delivery">
     <h2 id="deliveryID">Delivery address</h2>
     <p>Name:
     <input id="nameInput" type="text" onChange={getDataName}></input>
     </p>
     
 
     <p>Street and housenumber:
     <input id="streetInput" type="text" onChange={getDataStreet}></input>
     </p>
     
 
     <p>Zip code:
     <input id="zipInput" type="text" onChange={getDataZip}></input>
     </p>
     
 
     <p>City:
     <input id="cityInput" type="text" onChange={getDataCity}></input>
     </p>
 
     
     <button id="delivery-button">Back To Delivery Options</button>
 
   </div>
   
       
     
 
   <div id="payment">
     <h2 id="payment-id">Payment</h2>
     <h3 id="payment-method">Payment methods:</h3>
     <p id="pId1">
       <input type="checkbox" id="checkbox-round"></input>
       Credit card:
     <img id="payment-picture1" src="/img/credit-card.svg" alt="credit-card" />
     </p>
     <p id="pId2"><input type="checkbox" id="checkbox-round"></input>
       Vipps:
     <img id="payment-picture2" src="/img/vipps.png" width="40px" height="20px" alt="vipps"/>
     </p>
     <p id="pId3"> <input type="checkbox" id="checkbox-round"></input>
       Paypal:
     <img id="payment-picture3" src="/img/paypal.png" width="40px" height="20px" alt="paypal"/>
     </p>
     <button id="buttonsRed">Back to delivery</button>
     
 </div>
 
   
 
 
 <div id="delivery-info1">
   <h3>Total amount: 100kr</h3>
   <h3>Delivery address</h3>
   <p>Name: {Name}</p>
   <p>Street and housenumber: {Street}</p>
   <p>Zip code: {Zip}</p>
   <p>City: {City}</p>
   <button id="buttons">Payment</button>
 </div>
 
 <div id="delivery-info2">
   <h3>Total amount: 100kr</h3>
   <h3>Delivery address</h3>
   <p>Name: {Name}</p>
   <p>Street and housenumber: {Street}</p>
   <p>Zip code: {Zip}</p>
   <p>City: {City}</p>
   <button id="buttons">Complete checkout</button>
 </div>
 </div>
 
    </div>
  );
}
 
export default App;
