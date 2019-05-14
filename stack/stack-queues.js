//Implement a stack with basic functionalty (push and pop) using queues to store the data
//Either push or pop will have to be linear and therefore slow
//Queue = First In First Out (FIFO)

var primary = [1,2,3]; //1st queue
var secondary = []; //2nd queue

function push(x) {
    secondary.push(x);//Add your item to queue

    while (primary.length != 0) { //Emptying the primary queue and pushing it into the secondary in reversed order
        secondary.push(primary.pop());//This way we can more easily perform our pop 
    }

    var temp = primary;//Store primary value here
    primary = secondary;//Move our reversed array to the primary
    secondary = temp;//Clear the secondary array by assigning it to our cleared primary
}

function pop() {// Just perform the pop because the array is properly order as queue because of the push
    if (primary.length == 0) { 
        return null;
    } 

    return primary.pop();
}


push(4);