
var friends = [
    {
        "name": "Ahmed",
        "photo": "",
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



var arr1 = [5, 1, 3, 4, 4, 1, 3, 5, 4, 3];
var arr2 = [1, 5, 3, 4, 2, 1, 3, 5, 1, 3];

//function that consoles the friends var scores
var friendsToCompare = function () {
    for (i = 0; i < friends.length; i++) {
        var info = console.log(friends[i].scores)
    } return info;
}
friendsToCompare();

//function using two arrays passed in that makes new array with the differences between arrays
function diffArr(arr1, arr2) {
    var newArr = [];
    for (i = 0; i < arr1.length; i++) {
        var absoluteResult = Math.abs(arr1[i] - arr2[i]);
        // compare indexof arr1 to arr2
        newArr.push(absoluteResult);
    }
    return newArr;
}


//function using two arrays passed in that shows number difference between arrays
function diffNum(arr1, arr2) {
    var totalDiff = 0;
    for (i = 0; i < arr1.length; i++) {
        var absoluteResult = Math.abs(arr1[i] - arr2[i]);
        totalDiff += absoluteResult;
    }
    return totalDiff;
}
console.log("diffArr(arr1, arr2): " + diffArr(arr1, arr2));
console.log("diffNum(arr1, arr2): " + diffNum(arr1, arr2));


module.exports = friends;

`
im not sure how to iterate through the below scores and check which matches the users
console logs:
colins-MBP:FriendFinder create$ node algorerhythm.js 
[ 5, 1, 4, 4, 3, 1, 2, 5, 4, 1 ]
[ 5, 1, 4, 1, 5, 3, 1, 5, 4, 1 ]
[ 5, 1, 4, 4, 4, 1, 3, 2, 4, 1 ]
[ 5, 1, 4, 1, 5, 1, 3, 1, 4, 5 ]
[ 5, 1, 4, 4, 5, 1, 1, 5, 4, 1 ]
[ 5, 1, 3, 4, 4, 1, 3, 5, 4, 3 ]
diffArr(arr1, arr2): 4,4,0,0,2,0,0,0,3,0
diffNum(arr1, arr2): 13
colins-MBP:FriendFinder create$ 
`