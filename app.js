alert("Developer Adeel")

    var userName = prompt("Enter Your User Name" , "Adeel Hassan");
    var phoneNumber = prompt("Enter Your Phone Number" , "03162131606");
    var email = prompt("Enter Your Email" , "adeelhassan9025@gmail.com");
    var password = prompt("Enter Your Password" , "123@");
    var confirmPassword = prompt("Confirm Your Password" , "123@");
    

    if(!userName || !phoneNumber || !email || !password || !confirmPassword ){
        alert ("Error; Please fill input fields.");
    }else{
        if( password === confirmPassword){
            alert(" Congrate! Your Are Succesfully Register:");
        }else{
            alert("Error: Your Password Not Match!");
        }
    }
