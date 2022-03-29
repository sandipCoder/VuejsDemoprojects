import validator from "validator";

const validationregisteruser = (data) => {
    //console.log(data);
    let errors = {};

    const { username, email, password, cpassword } = data;
    if (localStorage.users) {
        let lsuser = localStorage.users;
        lsuser = JSON.parse(lsuser);
        let isindex = (user) => user.username === username;

        let index = lsuser.findIndex(isindex);
       
        if (index > -1) {
            errors.username = "Username already exists.."
        }
    }

    if (validator.isEmpty(username)) {
        errors.username = "Username should be required...!";
    }
    if (!validator.isEmail(email)) {
        errors.email = "Email should be valid..."
    }
    if (validator.isEmpty(email)) {
        errors.email = "Email should be required...!";
    }
    if (validator.isEmpty(password)) {
        errors.password = "Password should be required...!";
    }
    if (!validator.equals(password, cpassword)) {
        errors.cpassword = "Password should match...!";
    }
    if (validator.isEmpty(cpassword)) {
        errors.cpassword = "Confirm password should be required...!";
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }

};

export default validationregisteruser;
