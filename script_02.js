const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Question 1: Sors-moi la liste des titres des livres du CDI
const titles = books.map(book => book.title);
console.log("Liste des titres des livres du CDI:", titles);

// Question 2: Est-ce que tous les livres ont été empruntés au moins une fois?
const allRented = books.every(book => book.rented > 0);
console.log("Tous les livres ont-ils été empruntés au moins une fois?", allRented ? "Oui" : "Non");

// Question 3: Quel est le livre le plus emprunté?
const mostRentedBook = books.reduce((maxRented, book) => {
  return book.rented > maxRented.rented ? book : maxRented;
}, books[0]);
console.log("Le livre le plus emprunté est:", mostRentedBook.title);

// Question 4: Quel est le livre le moins emprunté?
const leastRentedBook = books.reduce((minRented, book) => {
  return book.rented < minRented.rented ? book : minRented;
}, books[0]);
console.log("Le livre le moins emprunté est:", leastRentedBook.title);

// Question 5: Supprime le livre avec l'ID 133712
const bookIndexToDelete = books.findIndex(book => book.id === 133712);
if (bookIndexToDelete !== -1) {
  books.splice(bookIndexToDelete, 1);
  console.log("Le livre avec l'ID 133712 a été supprimé.");
} else {
  console.log("Aucun livre trouvé avec l'ID 133712.");
}

// Affiche la liste des livres mise à jour
console.log("Liste des livres après suppression:", books);