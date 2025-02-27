import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

function generateUniqueID(fname, lname){
    var uniqueid;
    var alphanumeric = uuidv4().substring(0,8);
    uniqueid = fname[0].toLowerCase() + lname.toLowerCase() + alphanumeric;

    return uniqueid;


}
function addAccount(array){
    if(array[0] != null && array[1] != null && array[2] != null && array[3] != null &&
        array[0].length != 0 && array[1].length != 0 && array[2].length != 0){
        if(validator.isEmail(array[2]) && array[3] >= 18){  
            var uniqueid = generateUniqueID(array[0], array[1]);
            array.push(uniqueid);

            var userData = array.join(",");

            try {
                appendFileSync('users.txt',  userData + "\n");
            } catch (err) {
                /* Handle the error */
            } 
            return true
        }else{
            return false
            
        }
    
    }
    else{
        return false

    }

    
}   

export {generateUniqueID, addAccount}