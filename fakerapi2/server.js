const express = require("express");
const faker = require ("faker");
const app = express();
const port = 3000;

// Create 2 functions: createUser, createCompany that return an object with the properties listed above
// User Object
// _id
// firstName
// lastName
// phoneNumber
// email
// password


// Company Object
// _id
// name
// address
// street
// city
// state
// zipCode
// country

const createUser = () => {
    const newUser = {
        _id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

// const Company = () => {
//     const newCompany = {
//         _id: faker.company._id(),
//         name: faker.company.name(),
//         address: faker.company.address(),
//         street: faker.company.street(),
//         city: faker.company.city(),
//         state: faker.company.state(),
//         zipCode: faker.company.zipCode(),
//         country: faker.company.country()
//     };
//     return newCompany;
// };
const newAccount = createUser();
// console.log(faker.name);

app.get("/api", (req, res) => {
    res.json( {newAccount} );
});

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );