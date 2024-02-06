function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//  Ustawienie nasłuchiwania na załadowanie dokumentu
//Ten fragment kodu zapewnia, że cały skrypt zostanie uruchomiony tylko po pełnym załadowaniu struktury DOM dokumentu. Jest to kluczowe, aby upewnić się, że wszystkie elementy HTML są dostępne dla skryptu.
// Znalezienie i przypisanie elementów strony
//Skrypt wyszukuje i przypisuje do zmiennych kluczowe elementy interfejsu: przyciski do tworzenia i niszczenia elementów, kontener, do którego będą dodawane elementy (div#boxes), oraz pole input, z którego będzie pobierana liczba elementów do utworzenia.
document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");
  const input = document.querySelector('input[type="number"]');

  // Dodawanie nasłuchiwaczy zdarzeń na przyciskach.
  //Na przyciskach "Utwórz" i "Wyczyść" ustawiane są nasłuchiwacze zdarzeń, które reagują na kliknięcie. Kiedy przycisk "Utwórz" jest kliknięty, wywoływana jest funkcja createBoxes z wartością wprowadzoną przez użytkownika. Kiedy przycisk "Wyczyść" jest kliknięty, wywoływana jest funkcja destroyBoxes.
  createBtn.addEventListener("click", () => createBoxes(input.value));
  destroyBtn.addEventListener("click", destroyBoxes);

  // Funkcja tworząca elementy.
  //Funkcja createBoxes tworzy nowe elementy <div>, ustawia ich rozmiary i kolory, a następnie dodaje je do kontenera. Rozpoczyna od rozmiaru 30x30px i dla każdego kolejnego elementu zwiększa rozmiar o 10px. Kolory tła są losowane za pomocą funkcji getRandomHexColor.
  function createBoxes(amount) {
    let initialSize = 30; // Początkowy rozmiar dla pierwszego <div>
    const boxes = []; // Przechowuje nowo utworzone <div>

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      // Ustawienie wymiarów dla każdego <div>
      box.style.width = `${initialSize}px`;
      box.style.height = `${initialSize}px`;
      // Ustawienie losowego koloru tła
      box.style.backgroundColor = getRandomHexColor();
      // Zwiększenie rozmiaru dla kolejnego <div>
      initialSize += 10;

      boxes.push(box);
    }

    boxesContainer.append(...boxes); // Dodanie wszystkich <div> do kontenera
  }

  // Funkcja czyszcząca kontener.
  //Funkcja destroyBoxes usuwa wszystkie elementy wewnątrz kontenera #boxes, "czyszcząc" go.
  function destroyBoxes() {
    boxesContainer.innerHTML = ""; // Wyczyszczenie zawartości kontenera
  }

  // Funkcja generująca losowy kolor HEX.
  //Ta funkcja generuje losowy kolor w formacie HEX, używając funkcji matematycznych do wylosowania liczby, a następnie konwertując ją na format szesnastkowy. Wynik jest zawsze sześciocyfrowym kodem koloru HEX, dzięki użyciu padStart(6, '0'), które zapewnia, że wynik będzie miał odpowiednią długość nawet jeśli wylosowana liczba będzie krótka.
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }
});
