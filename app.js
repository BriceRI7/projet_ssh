import express from 'express';
import twig from 'twig';
import mongoose from 'mongoose';

import nodemon from 'nodemon';

const app = express();

app.use(express.static('public/assets'))

let dictators = [
    {
        id: 1,
        name: 'staline',
        country: 'Russie',
    },
    {
        id: 2,
        name:'Mussolini',
    country: 'Italia',
    }
];

app.listen(8080, () => {
    console.log("Serveur is running : http://localhost:8080");
});

app.get('/', (req, res) => {
res.render('home.html.twig', {
    dictators: dictators
})
});