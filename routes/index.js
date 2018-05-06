var express = require('express');
var router = express.Router();
var weapons_dal = require('../dal/weapons_dal');

/* GET home page. */
router.get('/', function(req, res, next) {
    weapons_dal.getAll(function (err,result) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);

            res.render('weapons/weapons_view_all', {weapons: result});
        }
    })
});

module.exports = router;

router.get('/insert', function (req, res) {
    weapons_dal.insert(req.query, function(err, result){
        if (err){
            console.log(err);
            res.send(err);
        }
        else {
            res.redirect(302,'/')
        }
    });
});