function isTeenager(age) {
    if (age >= 13 && age <= 19){
        return true;
    }else{
        return false;
    }
}

let age = 13;
if(isTeenager(age)){
    console.log("person is a teenager");
}else{
    console.log("person is not a teenager");
}
