var express = require('express');
var router = express.Router();


router.get('/app-ads.txt', function(req, res){
  res.render('app-ads.txt',{
    pageTitle: 'app-ads.txt',
    pageID:'app-ads.txt'
  });
});

module.exports = router;
