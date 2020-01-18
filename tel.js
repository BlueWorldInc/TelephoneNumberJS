//t = [ '0467123456' ]              // cas 1
t = [ '0123456789', '1123456789' ]; // cas 2

class Arbre {
  constructor(n) {
    this.number = n;
  }
  addSon(s) {
    this.son = s;  
  }
}

console.log(t);

var arbreList = [];
arbreList.push(new Arbre(t[0].charAt(0)));
var oldArbre = arbreList[0];

for (var i = 1; i < t[0].length; i++) {
    newArbre = new Arbre(t[0].charAt(i));
    oldArbre.addSon(newArbre);
    oldArbre = newArbre;
}


arbreList.push(new Arbre(t[1].charAt(0)));
var oldArbre = arbreList[1];

for (var i = 1; i < t[1].length; i++) {
    newArbre = new Arbre(t[1].charAt(i));
    oldArbre.addSon(newArbre);
    oldArbre = newArbre;
}

console.log(arbreList);