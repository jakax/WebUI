function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

var nodesArray = [],
    arr = [],
    arrFinal = [],
    nodoAct = 0,
    index = 1,
    corte = 1,
    value = 0;


 /*
  * Generate unbalanced binary search tree
  */
BinarySearchTree.prototype.push = function(val){
    var root = this.root;

    if(!root){
        this.root = new Node(val);
        return;
    }

    var currentNode = root;
    var newNode = new Node(val); 

    while(currentNode){
        if(val < currentNode.value){
            if(!currentNode.left){
                currentNode.left = newNode;
            break;
            }
            else{
                currentNode = currentNode.left;
            }
        }
        else{
            if(!currentNode.right){
            currentNode.right = newNode;
                break;
            }
            else{
                currentNode = currentNode.right;
            }
        }
    }
    if(nodesArray.indexOf(currentNode) === -1) {
        nodesArray.push(currentNode);
    }
    
}


var bst = new BinarySearchTree();
bst.push(40);
bst.push(20);
bst.push(10);
bst.push(30);
bst.push(60);
bst.push(50);
bst.push(70);
console.log(nodesArray);

//arr.push(nodesArray[0].value);
nodoAct = nodesArray[0];
//console.log(arr);

function searchNode() {
    if(value === 0) {
        value = parseInt(document.getElementById("nodo").value);
    } 
    // if (corte === 1) {
    //     esIgual();
    //}
    if (value === nodoAct.value && arr[0] !== nodoAct.value) {
        corte = 0;
        return arr.push(nodoAct.value);
    }        
    // if (corte === 1) {
    //     esMayor();
    //     searchNode();
    // }
    if (value > nodoAct.value && nodoAct.right !== null) {
        arr.push(nodoAct.value);
        nodoAct = nodoAct.right;
        return nodoAct;
        searchNode();
    }    
    // if (corte === 1) {
    //     arr = esMenor();
    //     searchNode();
    // }
    if (value < nodoAct.value && nodoAct.left !== null) {
        arr.push(nodoAct.value);
        nodoAct = nodoAct.left;
        return nodoAct;
        searchNode();
    }    

    console.log(arr);
}

function esIgual() {

}

function esMayor() {

}

function esMenor() {

}



 /*
  * Take value from input field and run binary tree generator  
  */
// function loadNode() {
//     var nodo;
//     nod = document.getElementById("nodo").value;
//     bst.push(nod);
// }
