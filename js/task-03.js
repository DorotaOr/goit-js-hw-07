const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Definiowanie danych obrazów: Tworzenie tablicy obiektów images, gdzie każdy obiekt zawiera url obrazu i tekst alternatywny alt. Te dane są używane do dynamicznego generowania galerii.
// Znalezienie elementu DOM: Użycie document.querySelector('.gallery') do znalezienia elementu w DOM, który odpowiada <ul class="gallery">. To miejsce, do którego dodaje się obrazy.
const galleryEl = document.querySelector(".gallery");

// Tworzenie znaczników HTML: Przechodzę przez każdy obiekt w tablicy images za pomocą metody .map(), tworząc ciąg znaczników HTML dla każdego obrazu. Każdy ciąg składa się z elementu <li> zawierającego element <img> z odpowiednimi atrybutami src i alt, a także ustaloną szerokością i wysokością dla jednolitego wyglądu. Używam .join(''), aby połączyć wszystkie elementy tablicy w jeden ciąg HTML.
const markup = images
  .map(({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}" width="250" height="150"></li>`;
  })
  .join("");

// Dodawanie znaczników do DOM: Za pomocą metody insertAdjacentHTML('beforeend', markup) dodaję utworzony ciąg HTML do elementu <ul class="gallery">. 'beforeend' oznacza, że dodaję elementy <li> na końcu listy, zachowując strukturę listy.
galleryEl.insertAdjacentHTML("beforeend", markup);

// Dodanie stylów CSS: W pliku css/common.css dodaję minimalne style, aby wykorzystać flexbox do stylizacji galerii.
