//Given two sorted arrays, A and B, where A is long enough to hold the contents of A and B, write a function 
//to copy the contents of B into A without using any buffer or additional memory.
//Solution: 

var a = [1, 3, 5, 0, 0, 0];
var b = [2, 4, 6];

function mergeArrays(a, b, aLength, bLength){
    
    if (aLength + bLength > a.length) { //Both of these arrays should fit in the A array
        throw "";
    }

    var aIndex = aLength - 1;//Pointer in the first array 
    var bIndex = bLength - 1;//Pointer in the second array 
    var mergeIndex = aLength + bLength - 1;// This pointer keeps track of where we will be merging into the array

    while (aIndex >= 0 && bIndex >= 0) {//Both arrays still have values that havent been copied
        if (a[aIndex] > b[bIndex]) {//Moving from biggest to smallest 
            a[mergeIndex] = a[aIndex];//If a value is bigger than b, replace the mergeIndex with the a value
            aIndex--;//Decrementing in order to move through the array
        } else {
            a[mergeIndex] = b[bIndex];//If b value is bigger than a, replace the mergeIndex with the b value
            bIndex--;//Decrementing in order to move through the array
        }
        mergeIndex--;
    }

    while (bIndex >= 0) {//If A pointer is out of range we still need to copy b elements over 
        a[mergeIndex] = b[bIndex];
        bIndex--;
        mergeIndex--;
    }
}

mergeArrays(a, b, 3, 3);