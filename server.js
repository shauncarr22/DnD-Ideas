const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');
const app = express();

const port = 5000;


app.use(express.static('dist'));
app.use(cors());
app.use(BodyParser.json());


app.get('/getStory', (req,res) => {
    const boss = ['The Slave Lords', 'Zargon', 'Strahd von Zarovich', 'Verminaard']
    
    const motive = ['To prove that Zadera is dead', 'To kill all the humans', 'to bring fourth the darkness', 'the dark father demands it']
    
    const world = ['post-apotyltic', 'steampunk', 'dark-ages', 'golden-age']

    const story = [boss[Math.floor(Math.random() * boss.length)], motive[Math.floor(Math.random() * motive.length)], world[Math.floor(Math.random() * world.length)]]

    res.send(story)

});

app.listen(port, () => console.log(`listening from port: ${port}`));