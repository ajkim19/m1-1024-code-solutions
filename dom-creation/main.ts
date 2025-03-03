interface Pokemon {
  number: string;
  name: string;
  description: string;
  imageUrl: string;
}

const pokedex: Pokemon[] = [
  {
    number: '001',
    name: 'Bulbasaur',
    description:
      'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png',
  },
  {
    number: '004',
    name: 'Charmander',
    description:
      'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png',
  },
  {
    number: '007',
    name: 'Squirtle',
    description:
      'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png',
  },
  {
    number: '002',
    name: 'Ivysaur',
    description:
      'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png',
  },
  {
    number: '005',
    name: 'Charmeleon',
    description:
      'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png',
  },
  {
    number: '008',
    name: 'Wartortle',
    description:
      'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png',
  },
  {
    number: '003',
    name: 'Venusaur',
    description:
      'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png',
  },
  {
    number: '006',
    name: 'Charizard',
    description:
      'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png',
  },
  {
    number: '009',
    name: 'Blastoise',
    description:
      'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png',
  },
];

function renderPokemon(pokemon: Pokemon): HTMLDivElement {
  // Creates outer 'div.column-third' element
  const $divCol3: HTMLDivElement = document.createElement('div');
  if (!$divCol3) throw new Error('$divCol3 does not exist');
  $divCol3.setAttribute('class', 'column-third');

  // Creates and appends 'div.pokemon-card' element
  const $divPokeCard: HTMLDivElement = document.createElement('div');
  if (!$divPokeCard) throw new Error('$divPokeCard does not exist');
  $divPokeCard.className = 'pokemon-card';
  $divCol3.append($divPokeCard);

  // Creates and appends 'img' and 'div.pokemon-card-text' elements
  const $imgPoke: HTMLDivElement = document.createElement('img');
  if (!$imgPoke) throw new Error('$imgPoke does not exist');
  $imgPoke.setAttribute('src', `${pokemon.imageUrl}`);
  const $divPokeCardText: HTMLDivElement = document.createElement('div');
  if (!$divPokeCardText) throw new Error('$divPokeCardText does not exist');
  $divPokeCardText.className = 'pokemon-card-text';
  $divPokeCard.append($imgPoke, $divPokeCardText);

  // Creates and appends 'h2', 'h3', and 'p' elements
  const $h2: HTMLDivElement = document.createElement('h2');
  if (!$h2) throw new Error('$h2 does not exist');
  $h2.textContent = `${pokemon.name}`;
  const $h3: HTMLDivElement = document.createElement('h3');
  if (!$h3) throw new Error('$h3 does not exist');
  $h3.textContent = `${pokemon.number}`;
  const $p: HTMLDivElement = document.createElement('p');
  if (!$p) throw new Error('$p does not exist');
  $p.textContent = `${pokemon.description}`;
  $divPokeCardText.append($h2, $h3, $p);

  // Returns appended outer 'div'
  return $divCol3;
}

const $row: any = document.querySelector('.row');
if (!$row) throw new Error('The $row query failed');

for (const poke of pokedex) {
  const $pokeinfo: HTMLDivElement = renderPokemon(poke);
  $row.append($pokeinfo);
}

/// /
