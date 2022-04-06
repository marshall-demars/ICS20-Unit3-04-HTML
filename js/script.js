// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit-celsius').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('conversion').innerHTML = fahrenheit + '°F converted to Celsius is ' + celsius.toFixed(2) + ' ℃'
}