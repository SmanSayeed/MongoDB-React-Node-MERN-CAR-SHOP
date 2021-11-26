const express = require('express');
var cors = require('cors')
const { MongoClient } = require('mongodb');
require('dotenv').config()
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;
//saadman
//q0jFmlFeOLQKengP


app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9jft6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('car');

        const ordersCollection = database.collection('orders');
        const carsCollection = database.collection('products');
        const usersCollection = database.collection('users');
        const reviewsCollection = database.collection('reviews');

        //Users ------------------------------------------------------ Users//




         app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            let isAdmin = false;
            if (user?.role === 'admin') {
                isAdmin = true;
            }
            res.json({ admin: isAdmin });
        })

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            console.log(result);
            res.json(result);
        });

        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        });

        
        app.put('/users/admin', async (req, res) => {   
            const user = req.body;
    
                    const filter = { email: user.email };
                     const updateDoc = { $set: { role: 'admin' } };
            
                    const result = await usersCollection.updateOne(filter, updateDoc);
                    res.json(result);
             

        })
        
        
     


        /* ----------------------------
            
            ------------------------        --------------------------------------------
                                     USERS END
            ------------------------        --------------------------------------------

        --------------------------*/




 
        app.get('/reviews', async (req, res) => {
            const cursor = reviewsCollection.find({});
            const reviews = await cursor.toArray();
            res.send(reviews);
        });

        

        // POST API
        app.post('/reviews', async (req, res) => {
            // res.json(req);

            const service = req.body;
            console.log('hit the post api', service);

            const result = await reviewsCollection.insertOne(service);
            console.log(result);
            res.json(result)
        });





     




                // GET Single Car
        
        app.get('/cars', async (req, res) => {
            const cursor = carsCollection.find({});
            const services = await cursor.toArray();
            res.send(services);
        });

        
        app.get('/cars/:id', async (req, res) => {
            const id = req.params.id;
            console.log('getting specific service', id);
            const query = { _id: ObjectId(id) };
            const service = await carsCollection.findOne(query);
            res.json(service);
        })

        // POST API
        app.post('/cars', async (req, res) => {
            // res.json(req);

            const service = req.body;
            console.log('hit the post api', service);

            const result = await carsCollection.insertOne(service);
            console.log(result);
            res.json(result)
        });

        // DELETE API
        app.delete('/cars/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await carsCollection.deleteOne(query);
            res.json(result);
        })






        // Ordering
     
        app.post('/orders', async (req, res) => {
            const order = req.body;
            const result = await ordersCollection.insertOne(order);
            res.json(result);
        })

        app.get('/orders', async (req, res) => {
            const cursor = ordersCollection.find({});
            const bookings = await cursor.toArray();
            res.send(bookings);
        }); 

         app.get('/orders/:email', async (req, res) => {
            const cursor = ordersCollection.find({});
            const query = { email: ObjectId(email) };
            const result = await ordersCollection.findOne(query);
            res.json(result);
        });

        app.delete('/delete-order/:id', async (req, res) => {

            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await ordersCollection.deleteOne(query);
            res.json(result);
        });

          app.put('/update-status/:id', async (req, res) => {
            const id = req.params.id;
            
            const filter = { _id: ObjectId(id) };
            const updateStatus = req.body;
            
            const result = await ordersCollection.updateOne(
                { _id:new ObjectId(req.params.id) },
                { $set: {'status':'completed'} }
            );

            res.send(result);

        });

        //    app.get('/orders', async (req, res) => {
        //     const email = req.query.email;
        //     const date = req.query.date;

        //     const query = { email: email, date: date }

        //     const cursor = appointmentsCollection.find(query);
        //     const appointments = await cursor.toArray();
        //     res.json(appointments);
        // })

        // app.post('/order', async (req, res) => {
        //     const appointment = req.body;
        //     const result = await appointmentsCollection.insertOne(appointment);
        //     res.json(result)
        // });



       









        // GET API
  
        // app.get('/test', async (req, res) => {
        //     // const cursor = carsCollection.find({});
        //     // const services = await cursor.toArray();
        //     res.send('services');
        // });
        // app.get('/services', async (req, res) => {
        //     const cursor = carsCollection.find({});
        //     const services = await cursor.toArray();
        //     res.send(services);
        // });

        // // GET Single Service
        // app.get('/services/:id', async (req, res) => {
        //     const id = req.params.id;
        //     console.log('getting specific service', id);
        //     const query = { _id: ObjectId(id) };
        //     const service = await carsCollection.findOne(query);
        //     res.json(service);
        // })

        // // POST API
        // app.post('/services', async (req, res) => {
        //     // res.json(req);

        //     const service = req.body;
        //     console.log('hit the post api', service);

        //     const result = await carsCollection.insertOne(service);
        //     console.log(result);
        //     res.json(result)
        // });

        // // DELETE API
        // app.delete('/services/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const result = await carsCollection.deleteOne(query);
        //     res.json(result);
        // })

        //   // Add Orders API
        //   app.post('/bookings', async (req, res) => {
        //     const order = req.body;
        //     const result = await ordersCollection.insertOne(order);
        //     res.json(result);
        // })

        // app.get('/bookings', async (req, res) => {
        //     const cursor = ordersCollection.find({});
        //     const bookings = await cursor.toArray();
        //     res.send(bookings);
        // });

        // app.delete('/delete-booking/:id', async (req, res) => {

        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const result = await ordersCollection.deleteOne(query);
        //     res.json(result);
        // });

        // app.put('/update-status/:id', async (req, res) => {
        //     const id = req.params.id;
            
        //     const filter = { _id: ObjectId(id) };
        //     const updateStatus = req.body;
            
        //     const result = await ordersCollection.updateOne(
        //         { _id:new ObjectId(req.params.id) },
        //         { $set: {'status':'completed'} }
        //     );

        //     res.send(result);

        // });

       

    }
    finally {
        // await client.close();
    }
}


run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server is Running!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})