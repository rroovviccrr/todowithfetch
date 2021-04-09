//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { List } from "./component/List.js";

//render your react application
ReactDOM.render(<List />, document.querySelector("#app"));

//fetch('https://assets.breatheco.de/apis/fake/todos/user/roddolfVil', {
// method: "GET",
// body: JSON.stringify(todos),//
// headers: {
//   "Content-Type": "application/json"
//  }
// })
// .then(function(response) {
//	if (!response.ok) {
//   throw Error(response.statusText);
//	 }
// Read the response as json.
//	    return response.json();
// })
//	  .then(function(responseAsJson) {
// Do stuff with the JSON
// console.log(responseAsJson);
//	 })
//    .catch(function(error) {
//    console.log('Looks like there was a problem: \n', error);//
//    });
