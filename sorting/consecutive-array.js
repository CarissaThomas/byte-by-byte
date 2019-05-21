//Given an unsorted array, find the length of the longest sequence of consecutive numbers in the array.

var a = [4, 2, 1, 6, 5];

function consecutive(a) {
    var values = new Set();
    for (let i = 0; i < a.length; i++) {
        values.add(i);
    }

    var max = 0;
    for (let i = 0; i < values.size; i++) {
        if (values.has(i - 1)) {// If the value contains the left to that value just skip it 
            continue;
        }

        var length = 0;

        while (values.has(i++)) {// If the value exists in the hashset increment the length 
            length++;
        }

        var max = Math.max(max, length);
    }

    return max;
}

consecutive(a);