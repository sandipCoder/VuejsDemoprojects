import validator  from "validator";

const logingValidation =(data)=>{

    const {username, password} = data;

    let errors={};

    if(validator.isEmpty(username)){
        errors.username = "Username field is required";
    }
    if(validator.isEmpty(password)){
        errors.password = "password field is required";
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }

}
export default logingValidation