document.addEventListener('DOMContentLoaded', function() {
  var colorButton = document.getElementById('colorToggle');
  var speechButton = document.getElementById('speechToggle');
  var closeButton = document.querySelector('.close');
  var fontButton = document.getElementById('fontToggle');

  // Créez un tableau avec tous les boutons
  var buttons = [colorButton, speechButton, closeButton, fontButton];

  // Initialisez les états de basculement pour chaque bouton
  var toggleStates = {};

  // Ajoutez un gestionnaire d'événement à chaque bouton
  buttons.forEach(function(button) {
    toggleStates[button.id] = false;

    button.addEventListener('click', function() {
      toggleStates[button.id] = !toggleStates[button.id];

      if (toggleStates[button.id]) {
        button.style.backgroundColor = '#E37339';
      } else {
        button.style.backgroundColor = ''; // Remet la couleur par défaut ou ajustez selon vos besoins
      }

      // Ajoutez la transition CSS
      button.style.transition = 'background-color 0.1s';
    });
  });
  colorButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {color: true});
    });
  });

  speechButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {speech: true});
    });
  });

  closeButton.addEventListener('click', function() {
    window.close(); // Close the popup
  });

  fontButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {font: true});
    });
  });
});

