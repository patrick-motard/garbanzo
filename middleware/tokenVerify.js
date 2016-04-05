// jshint esversion: 6
var config = require('./../config.json'),
    jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token, config.secret, function(err, decoded){
            if(err){
                return res.status(403).json({message: 'Failed to authenticate.'});
            }
            req.decoded = decoded;
            return next();
        });
    } else {
        return res.status(403).json({message: 'No token provided'});
    }
};
