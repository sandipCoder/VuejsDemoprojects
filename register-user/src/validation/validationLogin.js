import validator from "validator";

const validationLogin= (data) => {
    //console.log(data);
    let errors = {};

    const { email, password} = data;

    if (!validator.isEmail(email)) {
        errors.email = "Email should be valid..."
    }
    if (validator.isEmpty(email)) {
        errors.email = "Email should be required...!";
    }
    if (validator.isEmpty(password)) {
        errors.password = "Password should be required...!";
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }

};

export default validationLogin;
