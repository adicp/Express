const express = require("express");
const faker = require ("faker");
const app = express();
const port = 8000;

const User = () => {
    const newUser = {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    console.log(newUser.id);
    console.log(newUser.firstName);
    return newUser;
};

const Company = () => {
    const newCompany = {
        id: faker.datatype.number(),
        name: faker.company.companyName(),
        address: faker.address.streetName(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    };
    return newCompany;
};

app.get("/api", (req, res) => {
    res.json({message: "Welcome to Adelajda Cupi"});
});

app.get("/api/users/new", (req, res) => {
    const newAccount = User();
    res.json({user : newAccount});
});

app.get("/api/user/company", (req, res) => {
    const newAccount = User();
    const newCompany = Company();
    res.json({user: newAccount, company: newCompany});
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = Company();
    res.json({company: newCompany});
});

const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${port}!`)
);