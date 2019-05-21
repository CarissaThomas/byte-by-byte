//Ask - are the arrays the same length?

arr1 = [1, 3, 5];
arr2 = [2, 4, 6];

var mySubArray;
var underlying;

function createSubArray(arr) {
    mySubArray.underlying = arr;
    mySubArray.start = 0;
    mySubArray.size = arr.length; 
    return mySubArray;
}

function getSubarray(i, j) {
    if (i > j ) {
        throw "invalid parameters"
    }
    if (j > this.size) {
        throw 
    }

    var s = new subArray();
    s.underlying = mySubArray.underlying;
    s.start = mySubArray.start + i;
    s.size = j - i;
    return s;
}

function getSize() {
    return mySubArray.size;
}

function getFirst() {
    return mySubArray.underlying[mySubArray.start];
}

function getLast() {
    return mySubArray.underlying[start + size - 1];
}

function getMedian() {
    if (mySubArray.size % 2 == 0) {
        return mySubArray.underlying[start + size / 2 - 1] + mySubArray.underlying[start + size / 2];
    }
    return mySubArray.underlying[mySubArray.start / 2];
}

function median(arr1, arr2) {
    if (arr1.length == 0 || arr1.length != arr2.length) {
        throw
    }
    subArrayMedian(arr1, arr2)
}

function subArrayMedian(arr1, arr2) {
    
}