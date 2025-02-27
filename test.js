import {generateUniqueID, addAccount} from './index.js'

console.log(generateUniqueID("Jacob", "Arias")) // prints generated id

console.log(addAccount(["Jacob", "Arias", "jlarias1@", 19]))// should not be a valid user
console.log(addAccount(["", "Arias", "jlarias1@", 19]))// should not be a valid user
console.log(addAccount(["Jacob", "Arias", "jlarias1@", 17])) // should not be a valid user
console.log(addAccount(["Jacob", "Arias", "jlarias1@up.edu.ph", 19])) //should add to users.txt
