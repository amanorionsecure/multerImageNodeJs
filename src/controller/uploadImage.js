const uploadImage = async(req, res) =>{
    try {
        res.status(200).json(req.file)
    } catch (error) {
        res.status(400).json({message : error})
    }
}

module.exports ={
    uploadImage
}