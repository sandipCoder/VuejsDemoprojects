import validator from "validator";


const loginValidation=(data)=>{

    let errors={};

    const {email,password} = data;
    if (localStorage.user) {
        let lsuer = localStorage.user
        lsuer = JSON.parse(lsuer);
        console.log(lsuer)

        let indeofData = lsuer.findIndex(item => item.email === email);
        let passwormatch = lsuer.findIndex(item => item.password === password);
        console.log(indeofData);

        if (indeofData === -1) {
            errors.email = "Email does not exists.."
        }
        if(passwormatch === -1) {
            errors.password = "Password does match.."
        }
    }

    if(!validator.isEmail(email)){
        errors.email = "Please provid valid Email"
    }
    if(validator.isEmpty(email)){
        errors.email="Email is required"
    }

    if(validator.isEmpty(password)){
        errors.password="Password is required"
    }

    return {
        isInvalid: Object.keys(errors).length>0,
        errors:errors
    }

}

export default loginValidation