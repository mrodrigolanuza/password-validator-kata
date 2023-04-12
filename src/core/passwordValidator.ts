export function isStrongPassword(password:string):boolean{
    return hasMinimunLength(password) && 
           includesSomeNumber(password) && 
           includesSomeLowercaseCharacter(password) && 
           includesSomeUppercaseCharacter(password) &&
           includesSomeUnderscoreCharacter(password);
}

function hasMinimunLength(password:string){
    return password.length >= 6;
}

function includesSomeNumber(password:string){
    return /\d/.test(password);
}

function includesSomeLowercaseCharacter(password:string){
    return /[a-z]/.test(password);
}

function includesSomeUppercaseCharacter(password:string){
    return /[A-Z]/.test(password);
}

function includesSomeUnderscoreCharacter(password:string){
    return password.indexOf('_') > 0;
}