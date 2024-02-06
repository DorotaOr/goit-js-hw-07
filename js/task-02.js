const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//  Pkt 1 Funkcja dodająca składniki do listy ul#ingredients
const addIngredients = (ingredients) => {
  // Znalezienie listy ul po ID za pomocą funkcji getElementById()
  const list = document.getElementById("ingredients");
  // Utworzenie fragmentu dokumentu
  const fragment = document.createDocumentFragment();
  // Iteracja po tablicy składników z użyciem funkcji forEach()
  ingredients.forEach((ingredient) => {
    // Utworzenie elementu li
    const li = document.createElement("li");

    // Pkt 2 Dodanie nazwy składnika jako tekst elementu li
    li.textContent = ingredient;

    // Pkt 3 Dodanie klasy 'item' do elementu li
    li.classList.add("item");
    // Dodanie elementu li do fragmentu
    fragment.appendChild(li);
  });

  // Pkt 4 Wstawienie wszystkich elementów li do listy ul za pomocą fragmentu
  list.appendChild(fragment);
};

// Wywołanie funkcji za pomocą funkcji addIngredients
addIngredients(ingredients);
