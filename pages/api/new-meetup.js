import { MongoClient } from "mongodb";

 async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // gets the data from request
    const {title, image, address, description} = data; 
  
    const client = await MongoClient.connect('mongodb+srv://rdelosreyesdev:rptdr007@cluster0.lifeatf.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupCollection = db.collection('meetups')
    const result = await meetupCollection.insertOne(data)
    
    console.log(result)
    client.close()
    res.status(201).json({message: 'Meetup Inserted!'})
  }
}

export default handler;