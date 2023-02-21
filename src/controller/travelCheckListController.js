const travelCheckListService =require('../services/travelCheckListService');
const createHttpError =require("http-errors");
   
const travelCheckList = async (req, res, next) => {
    let _dataDatail = req.body;
    let result=[];
    try {
        result = await travelCheckListService.travelCheckList(_dataDatail);
        res.status(200).json(result);
    } catch (error) {
        var er = error
        next(createHttpError(500, er.message));
    }
};

const travelCheckListAdd = async (req, res, next) => {
    let _dataDatail = req.body;
    let result=[];
    try {
        result = await travelCheckListService.travelCheckListAdd(_dataDatail);
        res.status(200).json(result);
    } catch (error) {
        var er = error
        next(createHttpError(500, er.message));
    }
}; 

const travelCheckListUpdate = async (req, res, next) => {
    let _dataDatail = req.body;
    let result=[];
    try {
        result = await travelCheckListService.travelCheckListUpdate(_dataDatail);
        res.status(200).json(result);
    } catch (error) {
        var er = error
        next(createHttpError(500, er.message));
    }
};

const travelCheckListDelete = async (req, res, next) => {
    let _dataDatail = req.body;
    let result=[];
    try {
        result = await travelCheckListService.travelCheckListDelete(_dataDatail);
        res.status(200).json(result);
    } catch (error) {
        var er = error
        next(createHttpError(500, er.message));
    }
};
    


module.exports = {
    travelCheckList,
    travelCheckListAdd,
    travelCheckListUpdate,
    travelCheckListDelete
}