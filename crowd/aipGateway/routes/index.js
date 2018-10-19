const express = require('express');
const router = express.Router();

router.get('/getInfo', function (req, res, next) {
  res.send({"code":200,"data":{"access":["admin"],"avator":"https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png","user_id":"14138","user_name":"iview_admin"},"msg":""})
})

module.exports = router;
