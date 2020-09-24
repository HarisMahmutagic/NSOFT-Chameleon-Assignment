const checkFunctions = {

    // Function for checking validate of Email Address.
    // Email address needs to have character @ and the last 4 characters needs to be ".com"
    // return 0 - OK Email
    // return false - Email is required
    // return true - Email is not valid

    checkEmail (email) {
        if(email === '') {
            return false;
        }
        let emailArray = [];
        for(let i=0;i<email.length;i++){
            emailArray.push(email[i]);
        }
        if(!emailArray.includes('@') || emailArray[emailArray.length-1] !== 'm' || emailArray[emailArray.length-2] !== 'o' || emailArray[emailArray.length-3] !== 'c' || emailArray[emailArray.length-4] !== '.') {
            return true;
        }
        else return 0;
    },

    // Function for checking validate of Password
    // Password needs to be at least 8 characters.
    // return 0 - OK password
    // return false - Password is required
    // return true - Password is not valid
    checkPassword (password) {
        if(password === '') {
            return false;
        }
        if(password.length < 8) {
            return true;
        }
        else return 0;
    },
    
}

export default checkFunctions;