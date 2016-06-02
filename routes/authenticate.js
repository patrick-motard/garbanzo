var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    //TODO: look at user object on request and compare to database record to
    // to determine whether or not to return an auth token, for now just use
    // hard coded user name and password
    console.log(req.body);
    if(req.body.name != 'jim lahey' || req.body.password != 'iAmTheLiqour'){
        res.status(401).json({
            message: 'Authentication failed. Username or Password incorrect.'});
        return;
    }
    var token = jwt.sign({user: 'chickenman'}, req.app.get('superSecret'), {
        expiresIn: 86400
    });

    res.status(200).json({
        message: 'Here\'s your stinkin\' token',
        token: token
    });
});

module.exports = router;
