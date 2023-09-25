const users = require('./users');

// Quel est le chiffre d'affaires moyen par utilisateur?
const averageRevenuePerUser = users.reduce((total, user) => total + user.revenue, 0) / users.length;
console.log(`Chiffre d'affaires moyen par utilisateur: ${averageRevenuePerUser}€`);

// Quel est le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue supérieur à 0)?
const usersWithRevenue = users.filter(user => user.revenue > 0);
const percentageUsersWithRevenue = (usersWithRevenue.length / users.length) * 100;
console.log(`Pourcentage d'utilisateurs ayant rapporté de l'argent: ${percentageUsersWithRevenue}%`);

// Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur?
const averageRevenuePerPayingUser = usersWithRevenue.reduce((total, user) => total + user.revenue, 0) / usersWithRevenue.length;
console.log(`Chiffre d'affaires moyen par utilisateur ayant rapporté de l'argent: ${averageRevenuePerPayingUser}€`);

// Combien avons-nous gagné d'argent au total?
const totalRevenue = users.reduce((total, user) => total + user.revenue, 0);
console.log(`Chiffre d'affaires total: ${totalRevenue}€`);

// Combien avons-nous d'utilisateurs en France?
const usersInFrance = users.filter(user => user.country === "France");
console.log(`Nombre d'utilisateurs en France: ${usersInFrance.length}`);

// Parmi ces utilisateurs, combien avons-nous de clients payants en France?
const payingUsersInFrance = usersInFrance.filter(user => user.revenue > 0);
console.log(`Nombre de clients payants en France: ${payingUsersInFrance.length}`);

// Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande-Bretagne)
const countries = ["Germany", "United States", "France", "Great Britain"];
const revenueByCountry = countries.reduce((result, country) => {
  const totalRevenueInCountry = users.filter(user => user.country === country).reduce((total, user) => total + user.revenue, 0);
  result[country] = totalRevenueInCountry;
  return result;
}, {});
console.log("Chiffre d'affaires par pays:", revenueByCountry);

// Fais-moi la liste de tous les pays dans lesquels nous avons gagné de l'argent?
const countriesWithRevenue = [...new Set(usersWithRevenue.map(user => user.country))];
console.log("Pays avec chiffre d'affaires:", countriesWithRevenue);

// Quels sont nos 5 utilisateurs qui nous ont rapporté le plus d'argent?
const top5UsersByRevenue = users.slice().sort((a, b) => b.revenue - a.revenue).slice(0, 5);
console.log("Top 5 utilisateurs par chiffre d'affaires:", top5UsersByRevenue);

// Gagnons-nous plus d'argent auprès des hommes ou des femmes?
const totalRevenueBySex = users.reduce((result, user) => {
  if (!result[user.sex]) {
    result[user.sex] = 0;
  }
  result[user.sex] += user.revenue;
  return result;
}, {});
console.log("Chiffre d'affaires par sexe:", totalRevenueBySex);

// Sors-moi les utilisateurs ayant rapporté au moins 75€
const usersWithAtLeast75Revenue = users.filter(user => user.revenue >= 75);
const lastNamesWithAtLeast75Revenue = usersWithAtLeast75Revenue.map(user => user.lastName);
console.log("Nom des utilisateurs ayant rapporté au moins 75€:", lastNamesWithAtLeast75Revenue);

// Parmi nos 100 premiers utilisateurs, quel est le pourcentage qui sont des clients payants?
const first100Users = users.slice(0, 100);
const percentagePayingAmongFirst100 = (first100Users.filter(user => user.revenue > 0).length / first100Users.length) * 100;
console.log(`Pourcentage de clients payants parmi les 100 premiers utilisateurs: ${percentagePayingAmongFirst100}%`);