// server/index.js

const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

app.get('/json', (req, res) => { //Line 9
  res.json(
    [{
       project: { id: 1, name: "Mars Rover" },
        employee: { id: 1, name: "Mario" },
        date: "27 Aug 2021",
        hours: 5 
    },{
        project: { id: 2, name: "Manhattan" },
        employee: { id: 2, name: "Giovanni" },
        date: "31 Aug 2021",
        hours: 3
    },{
    
        project: { id: 1, name: "Mars Rover" },
        employee: { id: 1, name: "Mario" },
        date: "01 Sep 2021",
        hours: 3
    },{
    
        project: { id: 1, name: "Mars Rover" },
        employee: { id: 3, name: "Lucia" },
        date: "01 Sep 2021",
        hours: 3
    },{
    
        project: { id: 2, name: "Manhattan" },
        employee: { id: 1, name: "Mario" },
        date: "27 Aug 2021",
        hours: 2
    },{
    
        project: { id: 2, name: "Manhattan" },
        employee: { id: 2, name: "Giovanni" },
        date: "01 Sep 2021",
        hours: 4
    }]
);
}); //Line 11
  
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});