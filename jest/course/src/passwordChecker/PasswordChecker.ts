
export enum PasswordErrorReason {
    SHORT = 'Password is too short',
    NO_UPPER = 'Password has no upper case characters',
    NO_LOWER = 'Password has no lower case characters'
}

export type CheckResult = {
    valid: boolean,
    reasons?: PasswordErrorReason[]
}

export class PasswordChecker{
    //Notice that it is easier to add changes to requirements, if all checks are implemented with small private methods
    /**
     * Checks if the provided password is valid 
     *
     * @param password to check
     */
    public checkPassword(password: string): CheckResult{
        const reasons: PasswordErrorReason[] = [];

        if(!this.hasLength(password, 8))
            reasons.push(PasswordErrorReason.SHORT);
        
        //if no upper case
        if(!this.hasUpper(password))
            reasons.push(PasswordErrorReason.NO_UPPER);
        
        //if no lower case
        if(!this.hasLower(password))
            reasons.push(PasswordErrorReason.NO_LOWER);
        
            
        return { 
            valid: reasons.length === 0,
            reasons: reasons.length !== 0 ? reasons : undefined 
        };
    }

    private hasLength(str: string, length: number){
        return str.length >= length;
    }

    private hasUpper(str: string){
        return /^.*[A-Z].*$/.test(str);
    }

    private hasLower(str: string){
        return /^.*[a-z].*$/.test(str);
    }
}