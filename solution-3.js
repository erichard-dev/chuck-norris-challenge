async function getChuckNorrisJoke() {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const joke = await response.json();
      return joke.value;
}

async function getChuckNorrisJokeCategories() {
      const response = await fetch("https://api.chucknorris.io/jokes/categories");
      const categories = await response.json();
      return categories;
}

async function setJoke() {
      const paragrapheJoke = document.getElementById("joke");
      let joke = await getChuckNorrisJoke();
      paragrapheJoke.textContent = joke;
}

async function setCategories() {const unordonedList = document.getElementById("categories");
      let categories = await getChuckNorrisJokeCategories();
      categories.forEach(element => {
            let item = document.createElement("li");
            item.textContent = element;
            unordonedList.appendChild(item);
      });
}


setJoke()
setCategories()

const button = document.getElementById("reset-button");

button.addEventListener("click", (event) => {
  setJoke()
});
