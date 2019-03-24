// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.


// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.

var friends = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            3,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "CookieMonster",
        "photo": "",
        "scores": [
            5,
            1,
            4,
            1,
            5,
            3,
            1,
            5,
            4,
            1
        ]
    },
    {
        "name": "Liz Lemon",
        "photo": "",
        "scores": [
            5,
            1,
            4,
            4,
            4,
            1,
            3,
            2,
            4,
            1
        ]
    },
    {
        "name": "Jenna Maroney",
        "photo": "",
        "scores": [
            5,
            1,
            4,
            1,
            5,
            1,
            3,
            1,
            4,
            5
        ]
    },
    {
        "name": "Titus Andromedon",
        "photo": "",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            1,
            5,
            4,
            1
        ]
    },
    {
        "name": "Beyonce",
        "photo": "",
        "scores": [
            5,
            1,
            3,
            4,
            4,
            1,
            3,
            5,
            4,
            3
        ]
    },
]
module.exports = friends;

// var arr1 = [5, 1, 3, 4, 4, 1, 3, 5, 4, 3];
// var arr2 = [1, 5, 3, 4, 2, 1, 3, 5, 1, 3];
// //function that consoles the friends var scores
// var friendsToCompare = function () {
//     for (i = 0; i < friends.length; i++) {
//         var info = console.log(friends[i].scores)
//     } return info;
// }
// friendsToCompare();

// //function using two arrays passed in that makes new array with the differences between arrays
// function diffArr(arr1, arr2) {
//     var newArr = [];
//     for (i = 0; i < arr1.length; i++) {
//         var absoluteResult = Math.abs(arr1[i] - arr2[i]);
//         // compare indexof arr1 to arr2
//         newArr.push(absoluteResult);
//     }
//     return newArr;
// }


// //function using two arrays passed in that shows number difference between arrays
// function diffNum(arr1, arr2) {
//     var totalDiff = 0;
//     for (i = 0; i < arr1.length; i++) {
//         var absoluteResult = Math.abs(arr1[i] - arr2[i]);
//         totalDiff += absoluteResult;
//     }
//     return totalDiff;
// }
// console.log("diffArr(arr1, arr2): " + diffArr(arr1, arr2));
// console.log("diffNum(arr1, arr2): " + diffNum(arr1, arr2));



// module.exports = diffArr(arr1, arr2);
// module.exports = diffNum(arr1, arr2);

// `
// im not sure how to iterate through the below scores and check which matches the users
// console logs:
// :FriendFinder create$ node algorerhythm.js 
// [ 5, 1, 4, 4, 3, 1, 2, 5, 4, 1 ]
// [ 5, 1, 4, 1, 5, 3, 1, 5, 4, 1 ]
// [ 5, 1, 4, 4, 4, 1, 3, 2, 4, 1 ]
// [ 5, 1, 4, 1, 5, 1, 3, 1, 4, 5 ]
// [ 5, 1, 4, 4, 5, 1, 1, 5, 4, 1 ]
// [ 5, 1, 3, 4, 4, 1, 3, 5, 4, 3 ]
// diffArr(arr1, arr2): 4,4,0,0,2,0,0,0,3,0
// diffNum(arr1, arr2): 13 
// `

