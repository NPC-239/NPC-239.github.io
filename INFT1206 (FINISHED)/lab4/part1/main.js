/* 
    Name: Mateo Valles
    File: main.js
    Date: 24 November 2023
    The main JavaScript file being called to index.html
*/

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
// Variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :xItem: went for a walk. When they got to :yItem:, they stared in horror for a few moments, then :zItem:. Bob saw the whole thing, but was not surprised — :xItem: weighs 300 pounds, and it was a hot day.";

// setting up the arrays
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// Using let instead of const to allow it to be reassigned
let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

// Replace the placeholders with the matching items
newStory = newStory.replace(':xItem:', xItem).replace(':yItem:', yItem).replace(':zItem:', zItem).replace(':xItem:', xItem);

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperatureFahrenheit =  Math.round(94);

    // Convert temperature from Fahrenheit to Celsius
    // Formula (32°F − 32) × 5/9 = 0°C
    const temperatureCelsius = Math.round((temperatureFahrenheit - 32) * 5 / 9);
    // Changed after reading an article: https://expattutor.wordpress.com/2013/02/14/what-happened-to-centigrade-confusion-over-the-celsius-temperature-scale/#:~:text=In%20England%2C%20the%20BBC%20Weather,England%2C%20according%20to%20some%20sources.&text=The%20centigrade%20scale%20was%20known%20as%20such%20from%201743-1954.
    const formattedTemperature = temperatureCelsius + ' celsius';

    // Convert the weight from pounds to stones
    // 1 pound = 0.0714286 stones
    const weightInStones = Math.round(weight / 14); 
    const formattedWeight = weightInStones + ' stone';

    // Update the newStory string
    newStory = newStory.replace('94 fahrenheit', formattedTemperature);
    newStory = newStory.replace('300 pounds', formattedWeight);
  }

  // Final story gets displayed
  story.textContent = newStory;
  story.style.visibility = 'visible';
}