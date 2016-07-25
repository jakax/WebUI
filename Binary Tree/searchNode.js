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
    nodoAct = 0,
    value = 0,
    valuePrev = 0;


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

 /*
 * Ordered values to generate a balanced tree
 */
var bst = new BinarySearchTree();
bst.push(40);
bst.push(20);
bst.push(10);
bst.push(30);
bst.push(60);
bst.push(50);
bst.push(70);


 /*
 * Give the path of a node entered by the user
 */
function searchNode() {
    valuePrev = value;
    value = parseInt(document.getElementById("nodo").value);
    if (value !== valuePrev) {
        arr = [];
        nodoAct = nodesArray[0];
    }
    if (value > nodoAct.value && nodoAct.right !== null) {
        arr.push(nodoAct.value);
        nodoAct = nodoAct.right;
        searchNode();
    } else if (value < nodoAct.value && nodoAct.left !== null) {
        arr.push(nodoAct.value);
        nodoAct = nodoAct.left;
        searchNode();
    } else {
        arr.push(nodoAct.value);
        document.getElementById("path").innerHTML = "Node Path: " + arr;
    }
}
