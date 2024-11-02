const { faker } = require('@faker-js/faker');
const {mySql}=require(`mysql2`)

//conncetion mySql
const connection=mySql.creeateConnection({
    host:`localhost`,
    user:`root`,
    database:`test`,
    password:`topper@123`
})
//only example to work a faker proper
let  createRandomUser=()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
console.log(createRandomUser())

//start  stor data in sql database
let  getRandomUser=()=> {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

  console.log(getRandomUser())