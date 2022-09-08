import { CountUp } from 'countUp.js';

window.onload = function() {
  var countUp = new CountUp('countries', 2000);
  countUp.start();
}