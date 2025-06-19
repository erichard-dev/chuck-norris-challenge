async function getChuckNorrisJoke() {
      /* 
            fonction : getChuckNorrisJoker
            Renvoie une blague sur Chuck Norris sous forme de chaîne de caractère.
            Attention : la fonction getChuckNorrisJoke est une fonction asynchrone (async), 
            il faut préfixer la fonction par le mot clé "await" lors de son appel (exemple : let joke = await getChuckNorrisJoke();)
      */
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const joke = await response.json();
      return joke.value;
}

// Compléter le script pour répondre au question du TP : "Chuck Norris challenge".
