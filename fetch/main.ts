interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchUserData(): Promise<void> {
  try {
    // Initiate a fetch request and await its response
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // Ensure the response status indicates success
    if (!response.ok) {
      // If the status code is not in the successful range, throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Await the parsing of the response body as JSON
    const user = (await response.json()) as User;

    // Successfully handle and output the JSON data
    console.log(user);
  } catch (error) {
    // Log any errors that arise during the fetch operation
    console.error('Error:', error);
  }
}

async function fetchPokemonData(): Promise<void> {
  try {
    // Initiate a fetch request and await its response
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/304');

    // Ensure the response status indicates success
    if (!response.ok) {
      // If the status code is not in the successful range, throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Await the parsing of the response body as JSON
    const pokemon = (await response.json()) as Pokemon;
    // Successfully handle and output the JSON data
    console.log(pokemon);
  } catch (error) {
    // Log any errors that arise during the fetch operation
    console.error('Error:', error);
  }
}

// Execute the async function to perform the fetch operation
fetchUserData();
fetchPokemonData();
