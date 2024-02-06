// Pkt 1
const categories = document.querySelector("#categories");
console.log(categories);

// sposób 1:
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

// sposób 2:
// const items = categories.children;
// console.log(`Number of categories: ${items.length}`);

// Pkt 2
items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("ul li").length;
  console.log(
    `Category: ${categoryName}, Number of elements: ${numberOfElements}`
  );
});
