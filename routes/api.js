//get players data

const express = require('express')
const router = express.Router()
const urllib  = require('urllib');

let players=[]
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}



urllib.request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, data, res) {
  if (err) {
    throw err; // you need to handle error
  }

  // data is Buffer instance
  players=JSON.parse(data)
  players=players.league.standard

});

router.get('/teams/:teamName', function (request, response) {
    const teamNameInput=request.params.teamName;
    if(teamToIDs.hasOwnProperty(teamNameInput)){
        const relevantTeams=players.filter(teamId=>teamId.teamId===teamToIDs[teamNameInput])
        response.send(relevantTeams)
    }
    
    
    //response.send(teamsId)
})





module.exports = router
