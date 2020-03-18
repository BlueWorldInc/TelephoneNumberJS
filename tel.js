//t = [ '0467123456' ]              // cas 1
t = ['0123456789', '0123457789']; // cas 2

class Arbre {
    constructor(n) {
        this.number = n;
        this.son = [];
    }
    addSon(s) {
        this.son.push(s);
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

// search in the tree
var d = 0;

searchInTree(arbreList[0], t[1], d, arbreList[0]);

function searchInTree(tree, tel, depth, parentTree) {

    if (depth == 0) {
        if (!(tree.number == tel.charAt(0))) {
            newArbre = new Arbre(tel[0].charAt(0));
            createNewArbre(newArbre, tel, ++depth);
            return 0;
        }
    }

    for (var i = 0; i < tree.son.length; i++) {
        if (tel.charAt(depth + 1) == tree.son[i]) {
            if (++depth < tel.length) {
                searchInTree(tree.son[i], tel, depth, tree);
            }
        }
    }

//    console.log(parentTree);

    if (++depth < tel.length) {
        createNewArbre(parentTree, tel, depth);
    }
    /*
    if (tel.charAt(depth) == tree.number) {
        console.log("the same tel number");
        console.log(depth);
        if (++depth < tel.length) {
            searchInTree(tree.son[0], tel, depth, tree);
        }
    } else {
        console.log("not the same tel number");
        //console.log(tree);
        createNewArbre(parentTree, tel, depth);
    }*/
}

function createNewArbre(parent, telToAdd, depth) {
    newArbre = new Arbre(telToAdd.charAt(depth));
//    console.log(parent);
//    console.log(depth);
    parent.addSon(newArbre);
    if (++depth < telToAdd.length) {
        createNewArbre(parent.son[0], telToAdd, depth);
    }
}

/*
for (var i = 0; i < t[1].length; i++) {
    if (t[1].charAt(i) == arbreList[0].number)
 
 
}
*/
/*
arbreList.push(new Arbre(t[1].charAt(0)));
var oldArbre = arbreList[1];
 
for (var i = 1; i < t[1].length; i++) {
    newArbre = new Arbre(t[1].charAt(i));
    oldArbre.addSon(newArbre);
    oldArbre = newArbre;
}
*/
console.log(arbreList);