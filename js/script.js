hb // Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin edited by david ukiri
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the surface area of a cube.
 */
function calculate () {
  // input
  let formula = parseFloat(document.getElementById('converter').value);

  // process
  let celcius = (formula - 32) / 1.8;
celcius = celcius.toFixed(2)
  
  // output
  document.getElementById('formula').innerHTML = 'celcius is equal to ' + celcius + '°'
}
