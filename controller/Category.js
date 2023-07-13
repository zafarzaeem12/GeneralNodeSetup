const Category_Model = require('../model/Category')

const Create_New_Category = async (req,res,next) => {
    try{
        const data = new Category_Model({
             name : req.body.name   
        })
        const create_Category = await data.save();
        res.send({
            message : `${create_Category.name} created Successfully`,
            status: 201,
            data : create_Category
        })
    }catch(err){
        res.send({
            message : `No Category created`,
            status: 404
        })
    }
}

module.exports = {
    Create_New_Category
}