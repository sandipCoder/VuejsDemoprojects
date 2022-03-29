import validator from "validator";

const validationsForm = (data) => {

    let errors = {}

    const { username, email, password, password2 } = data;

    if (localStorage.users) {
        let lsuser = localStorage.users;
        lsuser = JSON.parse(lsuser);
        let index = lsuser.findIndex((user) => user.username === username);
        if (index > -1) {
            errors.username = "User is allready exists!"
        }
    }

    if (validator.isEmpty(username)) {
        errors.username = "Username field is required"
    }
    if (!validator.isEmail(email)) {
        errors.email = "Email should valid!"
    }
    if (validator.isEmpty(email)) {
        errors.email = "Email field is required"
    }
    if (validator.isEmpty(password)) {
        errors.password = "password field is required"
    }
    if (!validator.equals(password, password2)) {
        errors.password2 = "Password should be match"
    }
    if (validator.isEmpty(password2)) {
        errors.password2 = "Confirm Password field is required"
    }
    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors
    }
}

export default validationsForm