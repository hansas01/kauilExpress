const express = require('express');
const orderRouter = express.Router();

orderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the orders to you');
})
.post((req, res) => {
    res.end(`Will add the order: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /order');
})
.delete((req, res) => {
    res.end('Deleting all orders');
});

orderRouter.route('/:orderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the orders: ${req.params.campsiteId} to you`);
})
.post((req, res) => {
  res.statusCode = 403;
    res.end(`POST operation not supported on /order/${req.params.campsiteId}`);
})
.put((req, res) => {
    res.write(`Updating the order: ${req.params.campsiteId}\n`);
    res.end(`Will update the order: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting order: ${req.params.campsiteId}`);
});

module.exports = orderRouter;
