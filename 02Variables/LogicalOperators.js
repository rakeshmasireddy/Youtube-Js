var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;


if(isLoggedIn){
    console.log("Success");
    if(isEmailVerified){
        console.log("Done");
        if(cardInfo){
            console.log("proceed");
        }
    }
}




if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("your are allowed");
}else{
    console.log("you are not allowed");
}