//Take a list of integers and return all of the groupings of 3 that sum up 0

//Pointers example 
// [-1, 0, 1, 2, -1, -4];
//   ^  ^             ^   


function threeSum(arr) {
    var results = [];

    arr.sort(function (a, b) { return a - b });

    for (var i = 0; i < arr.length - 3; i++) { // our pointers will cover the last items in array 
        if (i === 0 || arr[i - 1] > arr[i - 1]) { // i value is pointing to the value that is greater than the one before 
            var start = i + 1;// Set the 2nd pointer
            var end = arr.length - 1; // Set the last pointer (end of the array)

            while (start < end) { // while our pointers are still iterating through the array 
                if (arr[i] + arr[start] + arr[end] == 0) { // If our three pointers equal 0
                    results.add([arr[i], arr[start], arr[end]]); // add our three points to results array 
                }

                if (arr[i] + arr[start] + arr[end] < 0) { // if our three pointers are less then 0 move the start pointer up
                    var currentStart = start; // sorting the initial start in a pointer 

                    while (arr[start] === arr[currentStart] && start < end) { //
                        start++;
                    }
                } else { // if our three pointers are more than 0 pull the start pointer back 
                    var currentEnd = end;

                    while (arr[end] == arr[currentEnd] && start < end) {
                        end--;
                    }
                }

            }
        }
    }
}

var arr = [-1, 0, 1, 2, -1, -4];

threeSum(arr);


