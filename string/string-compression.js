
var test = "aaaabbbb"

function compress(s) {
        var out = "";
        var sum = 1; 

        for (var i = 0; i < s.length - 1; i++) {
            if (s.charAt(i) == s.charAt(i+1)) {//If the letter we are on is the same as the next letter 
                sum++;//Increment our sum to be appended
            } else {//If the current letter is different than the next
                out = out + s.charAt(i) + sum;//Add our sum to the current letter
                sum = 1;//Reset the sum to continue through the list 
            }
        }

        out = out + s.charAt(s.length - 1) + sum;//We still need to count the last char, we add it in here 
        return out.length < s.length ? out : s;//Ternary checking that our compressed s is shorter than the input s 
}

compress(test);