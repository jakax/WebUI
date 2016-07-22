function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}

var nodesArray = [];

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


function searchNode() {
    var value = document.getElementById("nodo").value;
    if()
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


 /*
  * Take value from input field and run binary tree generator  
  */
// function loadNode() {
//     var nodo;
//     nod = document.getElementById("nodo").value;
//     bst.push(nod);
// }
