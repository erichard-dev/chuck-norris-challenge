async function getChuckNorrisJoke() {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const joke = await response.json();
      return joke.value;
}

async function setJoke() {
      const paragrapheJoke = document.getElementById("joke");
      let joke = await getChuckNorrisJoke();
      paragrapheJoke.textContent = joke;
}


setJoke()
