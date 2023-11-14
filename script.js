function highlightLettersInArray() {
  var lettersToHighlight = ['b', 'd', 'p', 'q'];
  var allChars = document.body.innerText.split('');

  for (var i = 0; i < allChars.length; i++) {
      var char = allChars[i];

      if (lettersToHighlight.includes(char.toLowerCase())) {
          var span = document.createElement('span');
          span.className = 'highlight';
          span.innerText = char;

          // Remplacer le caractère original par le span créé
          allChars[i] = span.outerHTML;
      }
  }

  // Reconstruire le texte avec les balises ajoutées
  var modifiedText = allChars.join('');
  
  // Insérer le texte modifié dans le document
  document.body.innerHTML = modifiedText;
}
highlightLettersInArray();