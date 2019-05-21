
// ===============================================================================
var friends = require("../data/friends");
// var friendsToCompare = require("../data/friends");
// // ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

    app.post("/api/friends", function (req, res) {
        let friendMatch = friendsToCompare(req.body, friends);
        friends.push(req.body);
        res.json(friendMatch);
    });


    // var arr1 = [5, 1, 3, 4, 4, 1, 3, 5, 4, 3];
    // var arr2 = [1, 5, 3, 4, 2, 1, 3, 5, 1, 3];
    //function that consoles the friends var scores
    var friendsToCompare = function (newUserFriend, friends) {
        var runningDiffArr = [];
        for (i = 0; i < friends.length; i++) {

            runningDiffArr.push(diffNum(newUserFriend, friends[i]));
        }
        //arr.indexOf(Math.max(...arr));
        let friendIndex = runningDiffArr.indexOf(Math.min(...runningDiffArr));
        console.log("friend match", friends[friendIndex]);
        console.log("diff", runningDiffArr);
        return friends[friendIndex];
        //
    }
    // friendsToCompare();

    //function using two arrays passed in that shows number difference between arrays
    function diffNum(user, friend) {
        var totalDiff = 0;
        // console.log("88", user.scores);

        // console.log("90", user.scores.length);
        for (j = 0; j < user.scores.length; j++) {
            var absoluteResult = Math.abs(user.scores[j] - friend.scores[j]);
            // console.log("92", absoluteResult);
            // console.log("im in j");
            console.log(totalDiff);
            totalDiff += absoluteResult;

        } console.log("total diff", totalDiff);
        console.log("difference=" + totalDiff + " " + friend.name + " score: " + friend.scores);
        return totalDiff;
    }
};

