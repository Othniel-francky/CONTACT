export default function Validation(values) {
    let errors = {}

    const email_patterm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_patterm = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

    if (values.name === "") {
        errors.name = "Name should Not Empty"
    }else if (values.name.length < 3 || values.name.length > 30){
        errors.name = "Name must be B/W 3-30"
    }else{
        errors.name = ""
    }

    if (values.email === "") {
        errors.email = "Email should Not Empty"
    }else if (!email_patterm.test(values.email)){
        errors.email = "Email Invalide"
    }else{
        errors.email = ""
    }

    if (values.password === "") {
        errors.password = "Email should Not Empty"
    }else if (!password_patterm.test(values.password)){
        errors.password = "Mot De Passe Invalide"
    }else{
        errors.password = ""
    }

    return errors;
}