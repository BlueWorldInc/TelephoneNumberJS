/*const N = parseInt(readline());
var t = [];
for (let i = 0; i < N; i++) {
    const telephone = readline();
    t.push(telephone);
}
*/


class Arbre {
    
    constructor(n) {
        this.number = n;
        this.sons = [];
    }

    addSon(s) {
        this.sons.push(s);
    }

    checkSons(telRank) {

        for (var i = 0; i < this.sons.length; i++) {
            if (this.sons[i].number == telRank) {
                return this.sons[i];
            }
        }

        this.addSon(new Arbre(telRank));
        return this.checkSons(telRank);
        
    }

}

function addContact(contactList, telNumber) {
    var len = telNumber.length;
    for (var i = 0; i < len; i++) {
        //var aa = contactList.checkSons(telNumber[i]);
        //console.log(aa);
        // console.log(i);
        contactList = contactList.checkSons(telNumber[i]);
    }
}

function getSizeOf(contactList) {
    var file = [];
    file.push(contactList);
    var size = 0;
    while (file.length > 0) {
        var s = file.shift();
        for (var i = 0; i < s.sons.length; i++) {
            file.push(s.sons[i]);
            size++;
        }
    }
    return size;
}

myContactList = new Arbre(0);
// console.log(myContactList);
myTel = [0, 4, 7, 5];
addContact(myContactList, myTel);
myTel = [0, 4, 7, 5, 8];
addContact(myContactList, myTel);
myTel = [1, 4, 7, 6, 5];
addContact(myContactList, myTel);
myTel = [1, 3, 7, 6, 5];
addContact(myContactList, myTel);
console.log(myContactList);
console.log(getSizeOf(myContactList));



/*
mycar = new Arbre(7);
myToyota = new Arbre(15);
myFerrari = new Arbre(79);
mycar.addSon(myFerrari);
mycar.addSon(myToyota);
myFerrari.addSon(myToyota);
console.log(mycar);
*/



// fonction qui check tout les numéro et qui ajoute si il n'existe pas
// addContact(contactList, number)
// contactList est un arbre
// addContact check si pour le premier rang il est déjà dans le contactList
// ainsi de suite jusqu'à trouver une différence
// checkSons -> si il y a un son avec le numéro souhaiter il return le son
// -> il y a pas de son avec le numéro souhaiter il crée le son et return le son crée













/*
var newArbreL = [];
newArbreL.push(new Arbre(t[0].charAt(0)));
var oldArbre = newArbreL[0];

//on cree un nouvelle arbre
//on ajoute le premier numéro

for (var i = 1; i < t[0].length; i++) {
    newArbre = new Arbre(t[0].charAt(i));
    oldArbre.addSon(newArbre);
    newArbreL.push(newArbre);
    oldArbre = newArbre;
}

//on ajoute le second numéro (premier char) à la fin
//oldArbre est le dernier numéro de newArbreL

newArbreL.push(new Arbre(t[1].charAt(0)));
var oldArbre = newArbreL[newArbreL.length -1];


for (var i = 1; i < t[1].length; i++) {
    newArbre = new Arbre(t[1].charAt(i));
    oldArbre.addSon(newArbre);
    newArbreL.push(newArbre);
    oldArbre = newArbre;
}

console.log(newArbreL);
*/
/*
mycar = new Arbre(7);
myToyota = new Arbre(15);
myFerrari = new Arbre(79);
mycar.addSon(myFerrari);
mycar.son = myToyota;
console.log(mycar);
*/