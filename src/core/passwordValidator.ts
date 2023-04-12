export function isStrongPassword(password:string):boolean{
    if(password.length < 6)
        return false;
    
    const regex = /\d/;
    if(!regex.test(password))
        return false;
    return true;
}