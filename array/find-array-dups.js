//given an array of integers, find the dups 
//IF NOT SORTED, YOU NEED TO SORT THEM 


function findAllDups(arr) {
    var resultSet = {};

    for (let i = 0; i < arr.length; i++) {
        var index = Math.floor(arr[i]) - 1;// -1 from every number to find its correspoding index
        if (arr[index] < 0) { //if the number is negative its been marked as a dup
            resultSet["key"[i]] =  Math.floor(arr[i]);//Add to our hashset 
        } else {
            arr[index] = -arr[index];
        }
    }

    for (let i = 0; i < arr.length; i++) {// remove negatives from list for clean up
        array[i] = Math.floor(arr[i]);
    }

    console.log(resultSet);
}

var arr = [2, 1, 2, 1, 2];
findAllDups(arr)