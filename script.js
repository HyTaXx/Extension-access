document.getElementById('changeColorButton').addEventListener('click', function() {
    changeLetterColors(['b', 'd', 'p', 'q'], 'yellow'); // Change to the desired background color
  });
  
  function changeLetterColors(letters, color) {
    var allTextNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  
    while (allTextNodes.nextNode()) {
      var node = allTextNodes.currentNode;
      var text = node.nodeValue;
  
      for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        var regex = new RegExp(letter, 'gi');
        text = text.replace(regex, '<span class="highlight">' + letter + '</span>');
      }
  
      var wrapper = document.createElement('div');
      wrapper.innerHTML = text;
  
      while (wrapper.firstChild) {
        node.parentNode.insertBefore(wrapper.firstChild, node);
      }
  
      node.parentNode.removeChild(node);
    }
  
    var highlightedLetters = document.querySelectorAll('.highlight');
    for (var i = 0; i < highlightedLetters.length; i++) {
        highlightedLetters[i].style.color = color;
    }
  }
  