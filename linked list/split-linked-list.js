//Given a linked list, write a function that divides it into two halves.  
//Mod the original list and return a pointer to the second half of the list 

function linkedList() {

    this.head = null;
    this.tail = null;

    this.createNode = function (data) {
        return { data: data, next: null }
    };

    this.addNode = function (data) {
        if (this.head == null) {// If there is no head yet, the list is empty
            this.tail = this.createNode(data);// Create the tail node 
            this.head = this.tail;// The head is equal to the tail, the inital lenght is only 1 
        } else {
            this.tail.next = this.createNode(data);//Use the current tail to add a node to next
            this.tail = this.tail.next;
        }
    };
}

function divideList(list) {
    if (list == null) {
        return null;
    }

    var runner = list.head.next;// our pointer that is ahead
    list = list.head;

    while (runner != null) {
        runner = runner.next;

        if (runner == null) {
            break;
        }
        runner = runner.next;//Incremented twice to run ahead
        list = list.next;// Our second pointer that sits behind 
    }
    var toReturn = list.next;
    list.next = null;
    return toReturn;       
}


var list = new linkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);


divideList(list)
