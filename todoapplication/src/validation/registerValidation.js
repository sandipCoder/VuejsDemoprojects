import validator from "validator";

const registerValidation = (data) => {

    //  console.log("data",data)
    let errors = {}

    const { username, email, password, cpassword } = data;

    if (localStorage.user) {
        let lsuer = localStorage.user
        lsuer = JSON.parse(lsuer);
        console.log(lsuer)

        let indeofData = lsuer.findIndex(item => item.username === username);
        console.log(indeofData);
        let userEmail = lsuer.findIndex(item => item.email === email);

        if (indeofData > -1) {
            errors.username = "Username already exists.."
        }
        if(userEmail>-1){
            errors.email = "Email already exists.."
        }
    }

    if (validator.isEmpty(username)) {
        errors.username = "Username should be required...!";
    }
    if (validator.isEmpty(email)) {
        errors.email = "email should be required...!";
    }
    if (validator.isEmpty(password)) {
        errors.password = "password should be required...!";
    }
    if (!validator.equals(password, cpassword)) {
        errors.cpassword = "password should be Match...!";
    }
    if (validator.isEmpty(cpassword)) {
        errors.cpassword = "password should be Match...!";
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }

}


export default registerValidation