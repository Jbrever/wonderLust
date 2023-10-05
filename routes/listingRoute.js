const router = require('express').Router();
const {home,allListing,specificListing,editForm,patchData, addList,postAddList,deleteList} = require('../controller/listingControll')

router.route('/').get(home)
router.get('/listing',allListing)
router.get('/listing/:id',specificListing)
router.get('/listing/:id/edit',editForm)
router.patch('/listing/:id/edit',patchData)
router.get('/addlist',addList)
router.post('/addlist',postAddList)
router.delete('/listing/:id/edit',deleteList)
module.exports =router;