const { sequelize, QueryTypes } =require('../config/pgConnection');
const constants = require('../config/constant');

const travelCheckList = async (dataVar) => {
    let datalist = [];
    var question_id=  dataVar.questioniId;
    var PageSize=  parseInt(dataVar.PageSize) || 0 ;
    var PageOffset=((dataVar.PageNumber-1) * PageSize);
    try {
        let objContentdata  = await sequelize.query(`select * from  ${constants.vw_recreation_my_travel_ques_checklist} where question_id=:question_id order by function_id,feature_id DESC  
        LIMIT :PageSize 
        OFFSET :PageNumber `, {
            replacements: {
                question_id: question_id,
                PageNumber: PageOffset,
                PageSize: PageSize
            },
            type: QueryTypes.SELECT
        });
        datalist = objContentdata;
        return datalist;
    }
    catch (err) {
        let er = err;
        throw er;
    }
};

const travelCheckListAdd = async (dataVar)=> {
    let datalist = [];
    try {
        let objContentdata = await sequelize.query(`call  ${constants.recreation_travel_p_ques_checklist}(
                action => :action,
                vpkid=> :questionid,
                userid=> :userid,
                countryid=> :countryid,
                functionid=> :functionid,
                featureid=> :featureid,
                subfeatureid=> :subfeatureid,
                formstruct=> :formstruct
                )`, {
            replacements: {
                action: 'add',
                questionid: '0',
                userid: dataVar.userId,
                countryid: dataVar.countryId,
                functionid: dataVar.functionId,
                featureid: dataVar.featureId,
                subfeatureid: dataVar.subfeatureID,
                formstruct: dataVar.formStruct
            },
            type: QueryTypes.SELECT
        });
        datalist = objContentdata;
        return datalist;
    }
    catch (err) {
        let er = err;
        throw er;
    }

};

const travelCheckListUpdate = async (dataVar) => {
    let datalist = [];
    try {
        let objContentdata = await sequelize.query(`call  ${constants.recreation_travel_p_ques_checklist}(
                action => :action,
                vpkid=> :questionid,
                functionid=> :functionid,
                featureid=> :featureid,
                subfeatureid=> :subfeatureid,
                formstruct=> :formstruct,
                userid=> :userid
                )`, {
            replacements: {
                action: 'update',
                questionid: dataVar.questionId,
                functionid: dataVar.functionId,
                featureid: dataVar.featureId,
                subfeatureid: dataVar.subfeatureID,
                formstruct: dataVar.formStruct,
                userid: dataVar.userId
            },
            type: QueryTypes.SELECT
        });
        datalist = objContentdata;
        return datalist;
    }
    catch (err) {
        let er = err;
        throw er;
    }
};

const travelCheckListDelete = async (dataVar) => {
    let datalist = [];
    try {
        let objContentdata= await sequelize.query(`call  ${constants.recreation_travel_p_ques_checklist}(
            action => :action,
            vpkid=> :questionid,
            userid=> :userid
            )`, {
            replacements: {
                action: 'delete',
                questionid: dataVar.questionId,
                userid: dataVar.userId
            },
            type: QueryTypes.SELECT
        });
        datalist = objContentdata;
        return datalist;
    }
    catch (err) {
        let er = err;
        throw er;
    }
};

module.exports= {
    travelCheckList,
    travelCheckListAdd,
    travelCheckListUpdate,
    travelCheckListDelete
}
