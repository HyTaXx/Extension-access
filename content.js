var colorEnabled = false;
var speechEnabled = false;
var fontEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Message received:', request); // Log the received message
  if (request.color) {
    colorEnabled = !colorEnabled;
    if (!colorEnabled) {
      location.reload(); // Refresh the page when color is toggled off
    } else {
    console.log('Color enabled:', colorEnabled); // Log the new state of colorEnabled
    updateStyles();
    }
  }
  if (request.speech) {
    speechEnabled = !speechEnabled;
  }
  if (request.font) {
    fontEnabled = !fontEnabled;
    if (fontEnabled) {
      setFontFamily('sans-serif');
    } else {
      setFontFamily('');
    }
  }
});

function setFontFamily(fontFamily) {
  var elements = document.querySelectorAll('body, body *:not(i)');
  elements.forEach(function(element) {
    element.style.fontFamily = fontFamily;
    if (fontFamily) {
      element.style.fontSize = '105%';
    } else {
      element.style.fontSize = '100%';
    }
  });
}

function updateStyles() {
  var elements = document.querySelectorAll('body *');
  elements.forEach(function(element) {
    element.childNodes.forEach(function(node) {
      if (node.nodeType === 3) { // Text node
        var text = node.nodeValue;
        var newText = '';
        for (var i = 0; i < text.length; i++) {
          if (colorEnabled) {
            switch (text[i].toLowerCase()) {
              case 'b':
                newText += '<span class="b-color">' + text[i] + '</span>';
                break;
              case 'p':
                newText += '<span class="p-color">' + text[i] + '</span>';
                break;
              case 'd':
                newText += '<span class="d-color">' + text[i] + '</span>';
                break;
              case 'q':
                newText += '<span class="q-color">' + text[i] + '</span>';
                break;
              default:
                newText += '<span class="initial-color">' + text[i] + '</span>';
                break;
            }
          } else {
            newText += '<span class="initial-color">' + text[i] + '</span>'; // No class added
          }
        }
        var newNode = document.createElement('span');
        newNode.innerHTML = newText;
        element.replaceChild(newNode, node);
      }
    });
  });
}


