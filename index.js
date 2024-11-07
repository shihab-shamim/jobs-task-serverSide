const { MongoClient, ServerApiVersion } = require('mongodb');

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())




const uri = "mongodb+srv://seoPage1_task:ZrZLkjUEbbNIhjn1@cluster0.u53e1so.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    const attachCollection = client.db("attachments").collection("file");

    app.post('/attach',async(req,res)=>{
        const attach=req.body 
        
        const result =await attachCollection.insertOne(attach)
        res.send(result)

    })
    app.get('/attach',async(req,res)=>{

        const result=await attachCollection.find().toArray()
        res.send(result)

    })

  } finally {
 
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('jobs task server is running');
  });
  
  
  app.listen(port, () => {
    console.log('Server is running on port', port);
  });