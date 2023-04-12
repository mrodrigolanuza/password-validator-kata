/*
Lista de ejemplos:

1234abcdABCD_ > OK
1aA_ - No tiene longitud suficiente
abcdABCD_ - No tiene números
1234ABCD_ - No tiene minúsculas
1234abcd_ No tiene mayúsculas
1234abcdABCD No tiene guión bajo

*/

import { isStrongPassword } from "../core/passwordValidator";

describe("The Password validator..", ()=>{
    it("accepts the password when all requirements are accomplished", ()=>{
        expect(isStrongPassword('1234abcdABCD_')).toBe(true);
    });
    it("fails when password length is lower than 6 characters", ()=>{
        expect(isStrongPassword('1aA_')).toBe(false);
    });
    it("fails when password does not contain any number", ()=>{
        expect(isStrongPassword('abcdABCD_')).toBe(false);
    });
    it("fails when password does not contain any lowercase character", ()=>{
        expect(isStrongPassword('1234ABCD_')).toBe(false);
    });
    it("fails when password does not contain any uppercase character", ()=>{
        expect(isStrongPassword('1234abcd_')).toBe(false);
    });
});