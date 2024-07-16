import { PasswordChecker, PasswordErrorReason } from "../../passwordChecker/PasswordChecker";

describe('PasswordChecker class', () => {
    describe('checkPassword() should return', () => {
        let passwordChecker: PasswordChecker;

        beforeEach(() => {
            passwordChecker = new PasswordChecker();
        });
    
        describe('valid if password is valid', () => {
            const inputs = [
                'My_strong_password', 'another_Password', 'paSSword', 'passworD', 'PASSWOR_STRONGd', 'passwoRd23'
            ];
    
            it.each(inputs)('valid for %s', (input) => {
                const actual = passwordChecker.checkPassword(input);
                expect(actual.valid).toBe(true);
                expect(actual.reasons).toBe(undefined);
            });
        });

        describe('not valid if password less than 8 chars', () => {
            const inputs = [
                'passwor', 'pass', 'rt', ''
            ];
    
            it.each(inputs)('not valid for %s', (input) => {
                const actual = passwordChecker.checkPassword(input);
                expect(actual.valid).toBe(false);
                expect(actual.reasons).toContain(PasswordErrorReason.SHORT);
            });
        });
    
        describe('not valid if password has no upper case characters', () => {
            const inputs = [
                'password34', 'password', 'my_strong89_password', '78my_strong_password'
            ];
    
            it.each(inputs)('not valid for %s', (input) => {
                const actual = passwordChecker.checkPassword(input);
                expect(actual.valid).toBe(false);
                expect(actual.reasons).toContain(PasswordErrorReason.NO_UPPER);
            });
        });
    
        describe('not valid if password has no lower case characters', () => {
            const inputs = [
                'MY_STRONG_PASSWORD', 'ANOTHER_23_PASSWORD', '45NO_SMALL_CHARACTERS'
            ];
    
            it.each(inputs)('not valid for %s', (input) => {
                const actual = passwordChecker.checkPassword(input);
                expect(actual.valid).toBe(false);
                expect(actual.reasons).toContain(PasswordErrorReason.NO_LOWER);
            });
        });
    });
    
});