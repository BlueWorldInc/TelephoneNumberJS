/*const N = parseInt(readline());
var t = [];
for (let i = 0; i < N; i++) {
    const telephone = readline();
    t.push(telephone);
}
*/
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

//mycar = new Arbre(7);
//myToyota = new Arbre(15);
//mycar.son = myToyota;
//mycar.addSon(myToyota);
//console.log(mycar.son);
//console.log(telephoneNumber[0]);

var newArbreL = [];
newArbreL.push(new Arbre(t[0].charAt(0)));
var oldArbre = newArbreL[0];

for (var i = 1; i < t[0].length; i++) {
    newArbre = new Arbre(t[0].charAt(i));
    oldArbre.addSon(newArbre);
    newArbreL.push(newArbre);
    oldArbre = newArbre;
}

newArbreL.push(new Arbre(t[1].charAt(0)));
var oldArbre = newArbreL[newArbreL.length -1];

for (var i = 1; i < t[1].length; i++) {
    newArbre = new Arbre(t[1].charAt(i));
    oldArbre.addSon(newArbre);
    newArbreL.push(newArbre);
    oldArbre = newArbre;
}

console.log(newArbreL);