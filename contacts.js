const NUM_CONTACTS = 3

const firstNames = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Oliver','Sophia','Benjamin','Charlotte','Elijah','Mia','Lucas','Amelia','Mason','Harper','Logan','Evelyn','Henry','Aria','Qwen','Lily','Sebastian','Levi','Ellie','Nathan','Samantha','Caleb']

const lastNames = ['Smith','Hones','Brown','Johnson','Williams','Miller','Taylor','Wilson','Davis','White','Clark','Hall','Thomas','Thompson','Moore','Scott','Young','Jackson','Adams','Tryniski','Green','Evans','King','Baker','John','Harris','Roberts','Campbell','James','Carter','Murphy']

// generate a random number between min and max
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`

// generate a phone number
const generatePhoneNum = () => `${rand(999, 100)}-${rand(999,100)}-${rand(9999,1000)}`

// create a person
const createContact = () => ({name: generateName(), phone: generatePhoneNum()})

// compare two contacts for alpabetizing
export const compareNames = (contact1, contact2) => contact1.name > contact2.name

// add keys to based on index
// const addKeys = (contact, key) => ({
//     key: key,
//     name: contact.name,
//     phone: contact.phone,
// })
const addKeys = (contact, key) => ({key, ...contact})

// create an array of length NUM_CONTACTS and alphabetize by name
export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)