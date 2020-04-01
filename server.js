const express = require('express');
const cors = require('cors');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const Idea = require('/Users/laskey/Documents/DnDideas/db/index.js')


const app = express();

const port = 5000;


app.use(express.static('dist'));
app.use(cors());
app.use(BodyParser.json());


app.get('/getStory', (req,res) => {
    const boss = ['The Slave Lords', 'Zargon', 'Strahd von Zarovich', 'Verminaard', 'Goblin King', 'The Unkown Wizard', 'The Prince', 'The Elders']
    
    const motive = ['To prove that their god is dead', 'To kill all the humans and let night creatures reclaim earth', 'to bring fourth the darkness', 'the dark father demands it', 
    'The High council thinks they are the true rules of all living things', 'to become famous', 'to become rich', 'to obtain a lengendary item', 'obession with research', 'Revenge for ???', 'Thrill of conquest', 'Failing into reverse', 
    'to instill anarchy', 'teen angst']
    
    const world = ['post-apotyltic', 'steampunk', 'dark-ages', 'golden-age', 'the silver-age', 'industerial revloution']

    const story = [boss[Math.floor(Math.random() * boss.length)], motive[Math.floor(Math.random() * motive.length)], world[Math.floor(Math.random() * world.length)]]

    res.send(story)

});

app.post('/saveStory', (req,res) => {
   MongoClient.connect(`mongodb://localhost:27017/DnDIdeas`, (err,client) => {
    if(err) console.error(err);
    
    const db = client.db('DnDIdeas');

    const {Boss, Motive, World} = req.body;

    const newIdea = new Idea({
        Boss,
        Motive,
        World
    });

    newIdea.save();

    res.send('Idea Saved');

   });
});

app.get('/getAll', (req,res) => {
    MongoClient.connect(`mongodb://localhost:27017/DnDIdeas`, (err,client) => {
        if(err) console.error(err);

        const db = client.db('DnDIdeas');

        db.collection('ideas').find().toArray((err,result) => {
            if(err) console.error(err);

            res.send(result);
        });
    });
});

app.listen(port, () => console.log(`listening from port: ${port}`));