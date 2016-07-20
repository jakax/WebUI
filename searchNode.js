// var array = [];
// function Node(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// function insertNodes(nodo) {
//     return array.push(nodo);
// }

// function compair(a, b){
//     return a - b;
// }

// function generateTree(array) {
//     var count = 0,
//         pivote = 0,
//         arrAux = [],
//         rightArr = [];
//     if (Node.value === null) {
//         currentNode = new Node(val);
//     };
//     var arrayLen = array.length;
//     pivote = (Math.floor(arrayLen/2));
//     while(pivote !== 1) {
//         arrAux.push(pivote);
//         pivote = (Math.floor(arrayLen/2));
//         console.log(currentNode.value);
//     }
    


    
// }

// console.log(Math.floor(15/2));

//         currentNode.value = array[pivote];

// function funcionIzquierda(arrayLen, pivote) {
//     pivote = pivote/2;

// }
    // while(countL < pivote) {
    //     leftArr.push(array[countL]);
    //     countL++
    // }
    
    // console.log(leftArr);
    // while(countR < array.length + 1) {
    //     rightArr.push(array[countR]);
    //     count++
    // }


// function insertNode(val) {
    
//     while(currentNode){
//         if(val < currentNode.value){
//             if(!currentNode.left){
//                 currentNode.left = newNode;
//                 break;
//             }   
//             else{
//                 currentNode = currentNode.left;
//             }
//         }
//         else{
//             if(!currentNode.right){
//                 currentNode.right = newNode;
//                 break;
//             }
//             else{
//                 currentNode = currentNode.right;
//             }
//         }
//     }

// }

// insertNode(3);



// insertNodes(4);
// insertNodes(5);
// insertNodes(7);
// insertNodes(2);
// insertNodes(1);
// insertNodes(3);
// insertNodes(6);
// array.sort(compair);
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };


// var arr = [];
// function comparar ( a, b ){ return a - b; }
// arr.sort( comparar );  // [ 1, 5, 40, 200 ]



//paginaWEB
function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

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
console.log(currentNode);
}

var bst = new BinarySearchTree();
bst.push(4);
bst.push(2);
bst.push(1);
bst.push(3);
bst.push(6);
bst.push(5);
bst.push(7);
