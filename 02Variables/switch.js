var user = "subadmin";

switch (user) {
    case "admin":
        console.log("You have all access");
    break;
    case "subadmin":
        console.log("Get access to create/delete courses");
    break;
    case "testprep":
        console.log("Get access to create/delete tests");
    break;
    case "paiduser":
        console.log("You have access to paidcourses");
    break;
    default:
        console.log("Trail user");
        break;
}