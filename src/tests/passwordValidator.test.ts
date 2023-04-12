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
});