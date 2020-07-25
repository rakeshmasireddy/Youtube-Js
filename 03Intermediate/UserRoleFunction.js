var  getUserRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            // break;
        case "Subadmin":
            return `${name} is subadmin with access to create and delete`;
            // break;
        case "user":
            return `${name} is user consume all data`;
            // break;
             
        default:
         return `${name} is trail user`;
            //break;
    }           
}

console.log(getUserRole("Rakesh", "admin"));

var getrole = getUserRole("Rakesh", "user");

console.log(getrole);
