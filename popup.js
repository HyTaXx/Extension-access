document.addEventListener('DOMContentLoaded', function() {
  var colorButton = document.getElementById('colorToggle');
  var speechButton = document.getElementById('speechToggle');
  var closeButton = document.querySelector('.close');
  var fontButton = document.getElementById('fontToggle');

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