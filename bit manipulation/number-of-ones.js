//Find the number of 1s in the binary representation of a number 

function ones(){
    var sum = 0;

    while (x < 0) {
          sum += x % 2;
          
          x >>= 1;
    }

    return sum;
}