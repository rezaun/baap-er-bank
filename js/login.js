document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    //get user password 
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    //validate username and password
    if(userEmail == 'sontan@baap.com' && userPassword == '123456'){
        window.location.href = 'banking.html';
    }
});



