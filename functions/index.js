
const DialogflowApp = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

exports.gdax = functions.https.onRequest((request, response) => {

    // Initialize DialogflowApp object
    const app = new DialogflowApp({request, response});

    // Intents
    const WELCOME_INTENT = 'input.welcome';
    const GDAX_INTENT = 'input.gdax';

    // Parameters
    const QUANTITY = 'quantity';
    const PRICE = 'price';
    const CRYPTO = 'crypto';
    const PURCHASE = 'purchase';

    // Functions to handle requests
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

    // Build action map
    let actionMap = new Map();
    actionMap.set(GDAX_INTENT, gdaxIntent);
    actionMap.set(WELCOME_INTENT, welcomeIntent);
    
    // Initialize action map
    app.handleRequest(actionMap);

});