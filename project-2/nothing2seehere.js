var html = document.querySelector('html');
var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT);
var node;
while (node = walker.nextNode()) {
    node.nodeValue = node.nodeValue.replace(/please donate/gi, ''),
    node.nodeValue = node.nodeValue.replace(/donate/gi, ''),
    node.nodeValue = node.nodeValue.replace(/ways to donate/gi, '')
    node.nodeValue = node.nodeValue.replace(/contribute/gi, '')
    node.nodeValue = node.nodeValue.replace(/contact us/gi, ''),
    node.nodeValue = node.nodeValue.replace(/contact/gi, ''),
    node.nodeValue = node.nodeValue.replace(/subscribe/gi, ''),
    node.nodeValue = node.nodeValue.replace(/store/gi, ''),
    node.nodeValue = node.nodeValue.replace(/shop/gi, ''),
    node.nodeValue = node.nodeValue.replace(/support us/gi, ''),
    node.nodeValue = node.nodeValue.replace(/log in/gi, ''),
    node.nodeValue = node.nodeValue.replace(/sign up/gi, ''),
    node.nodeValue = node.nodeValue.replace(/give now/gi, ''),
    node.nodeValue = node.nodeValue.replace(/join inner circle/gi, ''),
    node.nodeValue = node.nodeValue.replace(/give monthly/gi, ''),
    node.nodeValue = node.nodeValue.replace(/gift/gi, ''),
    node.nodeValue = node.nodeValue.replace(/fund/gi, ''),
    node.nodeValue = node.nodeValue.replace(/start a chapter/gi, ''),
    node.nodeValue = node.nodeValue.replace(/find a life chain/gi, ''),
    node.nodeValue = node.nodeValue.replace(/support leaders/gi, ''),
    node.nodeValue = node.nodeValue.replace(/take action/gi, ''),
    node.nodeValue = node.nodeValue.replace(/join the party/gi, ''),
    node.nodeValue = node.nodeValue.replace(/join the movement/gi, ''),
    node.nodeValue = node.nodeValue.replace(/ baby/gi, ' fetus'),
    node.nodeValue = node.nodeValue.replace(/ babies /gi, ' fetuses '),
    node.nodeValue = node.nodeValue.replace(/ unborn /gi, ' '),
    node.nodeValue = node.nodeValue.replace(/ an unborn /gi, ' '),
    node.nodeValue = node.nodeValue.replace(/ baby /gi, ' fetus '),
    node.nodeValue = node.nodeValue.replace(/ child /gi, ' fetus '),
    node.nodeValue = node.nodeValue.replace(/ children /gi, ' fetuses '),
    node.nodeValue = node.nodeValue.replace(/ kill /gi, ' abort '),
    node.nodeValue = node.nodeValue.replace(/ killed /gi, ' aborted '),
    node.nodeValue = node.nodeValue.replace(/ mother /gi, ' parent ')
}