var friends = require("../data/friends");

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {  // get request
    res.json(friends);
  });
  //----------------------------------------------------------------------


  app.post("/api/friends", function(req, res) {  //post request
    console.log(req.body.scores);

    
    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;


    for(var i = 0; i < friends.length; i++) {  // some of this logic i had to look up - got very stuck here
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }
    //----------------------------------------------------------------------

    friends.push(user);
    //----------------------------------------------------------------------


    res.json(friends[bestFriendIndex]);
  });
};