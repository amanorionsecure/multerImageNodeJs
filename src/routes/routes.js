const express = require('express');
const Router = express()
const travelCheckListController = require('../controller/travelCheckListController');


Router.post('/travelCheckList/list', travelCheckListController.travelCheckList)
Router.post('/travelCheckList/add', travelCheckListController.travelCheckListAdd);
Router.post('/travelCheckList/update', travelCheckListController.travelCheckListUpdate);
Router.post('/travelCheckList/delete', travelCheckListController.travelCheckListDelete);

module.exports = Router;