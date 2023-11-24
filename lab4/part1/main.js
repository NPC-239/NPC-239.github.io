/* 
    Name: Mateo Valles
    File: main.js
    Date: 24 November 2023
    The main JavaScript file being called to index.html
*/

// Variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const newStory = storyText

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
