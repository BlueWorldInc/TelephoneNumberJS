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
console.log(myContactList);
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
