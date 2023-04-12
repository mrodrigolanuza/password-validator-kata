export function isStrongPassword(password:string):boolean{
    if(hasNotMinimunLength(password))
        return false;
    
    if(notIncludesAnyNumber(password))
        return false;
    
    return true;
}

function hasNotMinimunLength(password:string){
    return password.length < 6;
}

function notIncludesAnyNumber(password:string){
    return !/\d/.test(password);
}