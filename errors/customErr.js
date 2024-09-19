class CustomErr extends Error{
    constructor(msg, status){
        super(msg);
        this.status = status;
    }
}

const createCustomErr = (msg, status) => {
    return new CustomErr(msg, status);
}

module.exports = {CustomErr, createCustomErr};