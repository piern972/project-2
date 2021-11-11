// Technique 3
chrome.storage.sync.get({fromStored: "", toStored: ""}, function(result) {
  var html = document.querySelector('html');
  var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
  var node;
  while (node = walker.nextNode()) {
      var re = new RegExp(result.fromStored,"gi");
    node.nodeValue = node.nodeValue.replace(re, result.toStored);
  }
})
