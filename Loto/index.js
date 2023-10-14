const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ''; // Réinitialise le contenu du résultat à chaque vérification.

  // Vérification des informations personnelles
  if (!firstname) {
      resultDiv.innerHTML = 'Veuillez fournir un prénom.';
      return;
  }

  if (!lastname) {
      resultDiv.innerHTML = 'Veuillez fournir un nom.';
      return;
  }

  if (!email) {
      resultDiv.innerHTML = 'Veuillez fournir un email.';
      return;
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

  if (!emailRegex.test(email)) {
      resultDiv.innerHTML = 'Votre email n\'est pas valide.';
      return;
  }

  // Vérification des numéros Loto
  const lotoNumArray = lotoNumbers.split(',').map(num => parseInt(num));

  if (lotoNumArray.length !== 6 || lotoNumArray.some(isNaN)) {
      resultDiv.innerHTML = 'Veuillez fournir 6 numéros valides.';
      return;
  }

  // Génération de 6 numéros gagnants aléatoires
  const winningNumbers = generateWinningNumbers();

  // Vérification des numéros du joueur
  const numMatches = countMatches(lotoNumArray, winningNumbers);

  if (numMatches === 6) {
      resultDiv.innerHTML = 'Félicitations, vous avez gagné 1 million!!!!';
  } else {
      resultDiv.innerHTML = `Désolé, vous avez perdu, les nombres gagnants sont: ${winningNumbers.join(', ')}`;
  }
};

// Fonction pour générer 6 numéros gagnants aléatoires
const generateWinningNumbers = () => {
  const winningNumbers = [];

  while (winningNumbers.length < 6) {
      const randomNumber = Math.floor(Math.random() * 50) + 1; // Supposons que le Loto va de 1 à 50.
      if (!winningNumbers.includes(randomNumber)) {
          winningNumbers.push(randomNumber);
      }
  }

  return winningNumbers;
};

// Fonction pour compter les correspondances entre les numéros du joueur et les numéros gagnants
const countMatches = (playerNumbers, winningNumbers) => {
  let numMatches = 0;
  for (const num of playerNumbers) {
      if (winningNumbers.includes(num)) {
          numMatches++;
      }
  }
  return numMatches;
};

// Gestion de la soumission du formulaire
const lotoForm = document.getElementById('lotoForm');
lotoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const lotoNumbers = document.getElementById('lotoNumbers').value;
  checkLoto(firstname, lastname, email, lotoNumbers);
});
