const express = require('express')
let cors = require('cors')
let app = express()
const PORT = 8000

const savageFights ={
  "p1s": {
    "name": "Pandaemonium First Circle",
    "strats": [{"chains": "color buddies"}, {"intemperence": "flex"}, {"shining cells": "red safe"}, {"fourfold chains":"clock"}]
  },

  "p2s": {
    "name": "Pandaemonium Second Circle",
    "strats": [{"Ominous bubbling":"Group 1 stacks under, group 2 on bridge"}, {"predatory avarice": "Tank left, dps right"}, {"kampeos harma":"squares on plat, triangles between, odds under, evens across"}, {"2nd coherence":"Group at C, teather to A"}, {"third flow": "Just do it right, don't try to cheese it"}]

  },

  "p3s": {
    "name": "Pandaemonium Third Circle",
    "strats": [{"adds":"2 teathers left looking inwards, 1 teather right"}, {"fountains of fire": "Melee first, tank second, Ranged third"}, {"flames of asphedelos":"https://ff14.toolboxgaming.space/?id=612843380352461&preview=1"}, {"death's toll": "1 stack = behind the tooth, 2 stacks = intercard, 4 stacks = middle"}]

  },

  "p4s": {
    "name": "Pandaemonium Fourth Circle",
    "strats":[{"south stack rot": "https://ff14.toolboxgaming.space/?id=522544145951461&preview=1"}, {"uptime pinax": "https://ff14.toolboxgaming.space/?id=506740960722461&preview=1"}, {"braindead orbs": "https://ff14.toolboxgaming.space/?id=620840351542461&preview=1"}, {"north tower":"https://ff14.toolboxgaming.space/?id=395645910491461&preview=1" } ]
  },

  "unknown":{
    "name": "This fight either doesn't exist, has been misspelled or has not yet been added to this API"
  }
}

app.use(cors())

app.get("/app", (req, res) => {
  res.sendFile(__dirname +"index.html")
})

app.get("/api", (req, res)=> {
  res.json(savageFights)
})

app.get("/api/:fightName", (req, res) => {
  const fightName = req.params.fightName

  if(savageFights[fightName]){
    res.json(savageFights[fightName])
  } else {
    res.json(savageFights["unknown"])
  }
})

app.listen(process.env.PORT || PORT, (req, res) => {
  console.log(`listening on port ${PORT}`)
})