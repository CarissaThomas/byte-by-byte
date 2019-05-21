//Write a function to determine if two strings are anagrams
//Ask what kind of charaters are looking for?

function isAnagram(str1, str2) {
    var str1 = this.word1.toLowerCase().split('').sort().join('').trim();//To lowercase, split, sort, join, trim
    var str2 = this.word2.toLowerCase().split('').sort().join('').trim();

    if (str1 === str2) {
        this.isAnagram = true;
    } else {
        this.isAnagram = false;
    }
    return true;
}

isAnagram("abb", "bab");