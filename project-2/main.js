var elements = document.getElementsByTagName('html');

for (var i = 0; i < elements.length; i++) {
   var element = elements[i];

   element.style.setProperty('border', 'solid 10px green');
 }
