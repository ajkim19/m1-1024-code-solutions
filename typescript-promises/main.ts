import { takeAChance } from './take-a-chance.js';

takeAChance('Aaron')
  .then((message) => console.log(message))
  .catch((error) => console.error(`Error: ${error.message}`));
