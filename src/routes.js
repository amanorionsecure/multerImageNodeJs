const express = require('express')
const router = express.Router();
var { upload } = require('./services/uploadImage')
var {uploadImage} = require('./controller/uploadImage')

router.post('/upload/single', upload, uploadImage)

module.exports = router;