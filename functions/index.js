
const DialogflowApp = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

exports.gdax = functions.https.onRequest((request, response) => {
    const app = new DialogflowApp({request, response});

    const WELCOME_INTENT = 'input.welcome';
    const GDAX_INTENT = 'input.gdax';

    const QUANTITY = 'quantity';
    const PRICE = 'price';
    const CRYPTO = 'crypto';
    const PURCHASE = 'purchase';

    function welcomeIntent(app) {
        app.ask('Welcome to GDAX trader.');
    }

    function gdaxIntent(app) {
        let quantity = app.getArgument(QUANTITY);
        let price = app.getArgument(PRICE);
        let crypto = app.getArgument(CRYPTO);
        let purchase = app.getArgument(PURCHASE);
        app.ask("Creating order to " + purchase + " " + quantity + " " + crypto + " at " + price);
    }

    let actionMap = new Map();
    actionMap.set(GDAX_INTENT, gdaxIntent);
    actionMap.set(WELCOME_INTENT, welcomeIntent);
    
    app.handleRequest(actionMap);

});