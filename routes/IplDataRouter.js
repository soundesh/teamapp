const router = require('express').Router()
const auth = require('../auth/auth')
const authAdmin=require('../auth/authAdmin')
const ipldataCtrl=require('../controllers/ipldataCtrl')
router.route('/iplteam')
    .get(ipldataCtrl.getdata)
    .post(auth, authAdmin,ipldataCtrl.CreateIpldata)
router.route('/iplteam/get')
    .delete(auth, authAdmin,ipldataCtrl.deletedata)
    .put(auth, authAdmin,ipldataCtrl.updatedata)
router.route('/iplteam/image').post(auth, authAdmin,ipldataCtrl.imageupdatedata)

module.exports = router

