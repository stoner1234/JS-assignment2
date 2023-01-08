console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1


var input = [1, 2, 3, 4, 5, 1, 3];

function find(a, b) {
    var results = [];
    var idx = b.indexOf(a);
    while (idx != -1) {
        results.push(idx);
        idx = b.indexOf(a, idx + 1);
    }
    return results;
}

console.log(find(10, input));



console.log("Q1 END =====================")


// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5





var number = 5; // height of pattern
var string = "";
// External loop
for (var i = 1; i <= number; i++) {
    for (var j = 1; j <= number - i + 1; j++) {
        string += number - j + 1;
    }
    string += "\n";
}
console.log(string);



console.log("Q2 END =====================")


// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]


var input_A = [3, 2, 1, 4, 5, 45, 78, 22, 9];

console.log(input_A.sort(function (a, b) {
    return a - b
}));






console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

var str1 = "LISTEN";
var str2 = "SILENT";

function checkStringsAnagram(a, b) {
    var len1 = a.length;
    var len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid Input');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if (str1 === str2) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkStringsAnagram("LISTEN", "SILENT")


console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH


function reverse1(str) {
    var r = "";
    for (var i = str.length - 1; i >= 0; i--) {
        r += str[i];
    }
    return r;
}

console.log(reverse1("hello"))



console.log("Q5 END =====================")