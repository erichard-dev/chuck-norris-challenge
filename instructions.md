# Chuck Norris challenge

Je vous propose un TP centré sur l'[API fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) du langage JavaScript.

Vous utiliserez l'API fetch pour récupérer des données au format JSON sur le serveur [chucknorris.io](https://api.chucknorris.io/).

Le serveur propose plusieurs points d'entrée (endpoint) sous forme d'URL pour récupérer des ressources comme des blagues sur Chuck Norris et la liste des catégories de blagues.

## Pré-requis

- Installer le plugin VS Code [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server). 

## Exercice 1

À l'aide de la fonction `getChuckNorrisJoke` définie dans le fichier `solution.js`, affichez dynamiquement une blague sur Chuck Norris, à l'endroit qui vous semble le plus adapté sur la page Web `index.html`.

## Exercice 2

En suivant le modèle de la fonction `getChuckNorrisJoke`, créer une fonction JavaScript `getChuckNorrisJokeCategories` qui vous permettra de récupérer les différentes catégories de blague. Pour cela cherché le point d'entrée (endpoint) sous forme d'URL qui vous permet de récupérer la liste des catégories de blagues (Cf. documentation [chucknorris.io](https://api.chucknorris.io/)). Puis affichez la liste des catégories à l'endroit qui vous semble le plus adapté sur la page Web `index.html`.

## Exercice 3

Ajoutez un bouton sur la page `index.html` qui change la blague sur Chuck Norris lors d'un événement `click`.