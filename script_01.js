const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Extraction des noms et prénoms
const names = entrepreneurs.map((entrepreneur) => ({
  firstName: entrepreneur.first,
  lastName: entrepreneur.last,
}));

// Calcul de l'âge actuel et remplacement de la date de naissance
const currentYear = new Date().getFullYear();
const entrepreneursWithAge = entrepreneurs.map((entrepreneur) => ({
  firstName: entrepreneur.first,
  lastName: entrepreneur.last,
  age: currentYear - entrepreneur.year,
}));

// Filtrage des entrepreneurs nés dans les années 70
const entrepreneursBornIn70s = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year <= 1979)
  .map(entrepreneur => ({
    firstName: entrepreneur.first,
    lastName: entrepreneur.last,
    year: entrepreneur.year
  }));

console.log("\nNoms et prénoms des entrepreneurs :\n");
console.log(names);
console.log("\nAge actuel des entrepreneurs :\n");
console.log(entrepreneursWithAge);
console.log("\nEntrepreneurs nés dans les années 70 :\n");
console.log(entrepreneursBornIn70s);