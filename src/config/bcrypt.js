
import bcrypt from 'bcrypt'

export const hashPassword = function(password,saltRounds){
    return bcrypt.hashSync(password, saltRounds,)
}
