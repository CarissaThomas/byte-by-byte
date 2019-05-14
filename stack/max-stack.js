//What is the stack holding?
//Ask if you want a LIFO? ()


var stack;
var maxStack = null;

function push(x) {
    var newNode = new node();// Create our new node
    newNode.value = x;// Set the value we passed in as the new node value 

    if (stack == null) {//If the stack is empty then add the first node
        stack = newNode;
    } else { //Add node to the front of our list
        newNode.next = stack;//Store the existing stack in the next of the node
        stack = newNode;//Assign the node as the stack 
    }

    if (maxStack == null || newNode.value > maxStack.value) {// If there is no max or a new max
        newNode.oldMax = maxStack;// Store the old max in the node 
        maxStack = newNode;// Set the new max 
    }
}

function pop() {//Remove the first item in the stack 
    if (stack == null) { //Throw exception if empty
        throw "stack empty";
    }

    var firstNode = stack;// Get the first node of stack
    stack = firstNode.next;// Removing the first node from the stack

    if (firstNode.oldMax != null) { //If the old max is not empty on the node we are popping
        maxStack = firstNode.oldMax;//The new max 
    }

    return firstNode.value;
}

function max() {
    if (stack == null) { //Throw exception if empty
        throw "stack empty";
    }

    return maxStack.value;
}

function node() {
    var value;
    var next;
    var oldMax;
}

push(3);
push(2);
push(1);
pop();