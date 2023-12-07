const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const port = 3000

const fishDatabase = [
    {
        type: "freshwater",
        imgUrl: "pictures/alligator_gar.jpg",
        name: "Alligator Gar",
        sizeLimit: "No Size Limit",
        quantityLimit: "No Quantity Limit",
    },
    {
        type: "freshwater",
        imgUrl: "pictures/blue_catfish.jpg",
        name: "Blue Catfish",
        sizeLimit: "12 Minimum",
        quantityLimit: "100 per person", 
    },
    {
        type: "freshwater",
        imgUrl: "pictures/channel_catfish.jpg",
        name: "Channel Catfish",
        sizeLimit: "11 Minimum",
        quantityLimit: "100 per person", 
    },
    {
        type: "freshwater",
        imgUrl: "pictures/freshwater_drum.jpg",
        name: "Freshwater Drum",
        sizeLimit: "12 Minimum",
        quantityLimit: "25 per person", 
    },
    {
        type: "freshwater",
        imgUrl: "pictures/largemouth_bass.jpg",
        name: "Largemouth Bass",
        sizeLimit: "No Size Limit",
        quantityLimit: "10 per person",
    },
    {
        type: "freshwater",
        imgUrl: "pictures/spotted_bass.jpg",
        name: "Spotted Bass",
        sizeLimit: "No Size Limit",
        quantityLimit: "10 per person",
    },
    {
        type: "saltwater",
        imgUrl: "pictures/croaker.jpg",
        name: "Atlantic Croaker",
        sizeLimit: "No Size Limit",
        quantityLimit: "No Quantity Limit",
    },
    {
        type: "saltwater",
        imgUrl: "pictures/black_drum.jpg",
        name: "Black Drum",
        sizeLimit: 'Between 16" and 27", 1 over 27"',
        quantityLimit: "5 per person",
    },
    {
        type: "saltwater",
        imgUrl: "pictures/cobia.jpg",
        name: "Cobia",
        sizeLimit: '36" Minimum',
        quantityLimit: "1 per person, 2 per boat",
    },
    {
        type: "saltwater",
        imgUrl: "pictures/jack_crevalle.jpg",
        name: "Jack Crevalle",
        sizeLimit: "No Size Limit",
        quantityLimit: "No Quantity Limit",
    },
    {
        type: "saltwater",
        imgUrl: "pictures/dolphinfish.jpg",
        name: "Dolphin (Mahi Mahi)",
        sizeLimit: "No Size Limit",
        quantityLimit: "No Quantity Limit",
    },
    {
        type: "saltwater",
        imgUrl: "pictures/sailcat.jpg",
        name: "Gafftopsail",
        sizeLimit: "No Size Limit",
        quantityLimit: "No Quantity Limit",
    }
];

// app.use(
//   helmet({
//     crossOriginResourcePolicy: { policy: "cross-origin" },
//   })
// );

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})

const validFishTypes = ["freshwater", "saltwater"];

app.get('/fish/:type', (req, res) => {
  if (!validFishTypes.includes(req.params.type)) {
    res.status(404).send("Not Found");
  } else {
    res.json(fishDatabase.filter((aFish) => aFish.type === req.params.type))
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})