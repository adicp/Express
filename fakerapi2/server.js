const express = require("express");
const faker = require ("faker");
const app = express();
const port = 8000;

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
    // const newUser = {
    //     _id: faker.commerce._id(),
    //     firstName: faker.commerce.firstName(),
    //     lastName: faker.commerce.lastName(),
    //     phoneNumber: faker.commerce.phoneNumber(),
    //     email: faker.commerce.email(),
    //     password: faker.commerce.password()
    // };
    return newUser;
};

const Company = () => {
    const newCompany = {
        _id: faker.company._id(),
        name: faker.company.name(),
        address: faker.company.address(),
        street: faker.company.street(),
        city: faker.company.city(),
        state: faker.company.state(),
        zipCode: faker.company.zipCode(),
        country: faker.company.country()
    };
    return newCompany;
};
const newAccount = createUser();
console.log(newAccount);