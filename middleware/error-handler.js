const {CustomErr} = require('../errors/customErr');

const errorHandler = (err, req, res, next) => {
    console.log(err)
    if(err instanceof CustomErr){
        return res.status(err.status).json({ msg: err.message });
    }
    res.status(500).json({msg: 'something went wrong, try later'})
}

module.exports = errorHandler;