const jsdom = require("jsdom");
const fetch = require("node-fetch");
const { JSDOM } = jsdom;

const window = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`).window;

function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((booksData) => {
      console.log("Books Data:", booksData);
      renderBooks(booksData);
    });
}

function renderBooks(books) {
  const main = window.document.querySelector("main");
  books.forEach((book) => {
    const h2 = window.document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

window.document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

if (typeof window !== "undefined") {
  console.log("You are on the browser");
  console.log(window.location.href);
  console.log(window.location.protocol);
}
