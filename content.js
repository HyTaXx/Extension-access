function updateStyles() {
  var elements = document.querySelectorAll('body *');
  elements.forEach(function(element) {
    element.childNodes.forEach(function(node) {
      if (node.nodeType === 3) { // Text node
        var text = node.nodeValue;
        var newText = '';
        for (var i = 0; i < text.length; i++) {
          switch (text[i].toLowerCase()) {
            case 'b':
              newText += '<span style="background-color: yellow;">' + text[i] + '</span>';
              break;
            case 'p':
              newText += '<span style="background-color: blue;">' + text[i] + '</span>';
              break;
            case 'd':
              newText += '<span style="background-color: red;">' + text[i] + '</span>';
              break;
            case 'q':
              newText += '<span style="background-color: green;">' + text[i] + '</span>';
              break;
            default:
              newText += text[i];
          }
        }
        var newNode = document.createElement('span');
        newNode.innerHTML = newText;
        element.replaceChild(newNode, node);
      }
    });
  });
}

updateStyles();