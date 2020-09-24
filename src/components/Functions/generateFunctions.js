const generateFunctions = {
    // Function generateUserName will take all characters before @ in email input field
    // and create one new const : UserName.
    
    generateUserName(email) {
        let user= [];
        for(let i=0;i<email.length;i++) {
            if(email[i] !== '@'){
                user.push(email[i]);
            }
            else break;
        }
        let userName = user.join('');
        return userName;
    }

}

export default generateFunctions;