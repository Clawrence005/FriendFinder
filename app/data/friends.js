var friends = [
    {
        "name": "Jenna Maroney",
        "photo": "https://img.buzzfeed.com/buzzfeed-static/static/2016-01/12/20/campaign_images/webdr14/jenna-maroney-30-rock-2-31231-1452647315-5_dblbig.jpg",
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
        "photo": "https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F930423%252F97a69861-1354-408b-9551-e24803ef956f.jpg%252F950x534__filters%253Aquality%252890%2529.jpg?signature=jkkQCcV7Vj2Piswya7iuKBckEpc=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com",
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
        "photo": "https://images.pexels.com/photos/871830/pexels-photo-871830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
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
        "photo": "https://images.pexels.com/photos/871830/pexels-photo-871830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
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
        "photo": "https://images.pexels.com/photos/871830/pexels-photo-871830.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
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
// // var arr2 = [1, 5, 3, 4, 2, 1, 3, 5, 1, 3];
// //function that consoles the friends var scores
// var friendsToCompare = function (newUserFriend, friends) {
//     var runningDiffArr = [];
//     for (i = 0; i < friends.length; i++) {

//         runningDiffArr.push(diffNum(newUserFriend, friend[i]));
//     }
//     //
//     return friend[0];
//     //
// }
// // friendsToCompare();

// //function using two arrays passed in that shows number difference between arrays
// function diffNum(user, friend) {
//     var totalDiff = 0;
//     for (i = 0; i < user.length; i++) {
//         var absoluteResult = Math.abs(user.scores[i] - friend.scores[i]);
//         totalDiff += absoluteResult;

//     } console.log(totalDiff);

//     return totalDiff;
// }

// // console.log("diffNum(arr1, arr2): " + diffNum(arr1, arr2));
// module.exports = friendsToCompare();
// // module.exports = diffNum(user, friend);

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

