import faker from 'faker'
import Doctor from '../../models/doctor'

function createDoctors() {
  let doctors = []
  let doctTitle = ['dr.', 'drg.']
  for (let i = 0; i < 5; ++i) {
    let newDoctor =  {
      fullname: faker.name.firstName() + ' ' + faker.name.lastName(),
      title: doctTitle[Math.floor(Math.random() * 2)],
      username: faker.name.findName(),
      password: faker.random.word(),
      email: faker.internet.email(),
      birthdate: faker.date.past(),
      birthplace: faker.address.city(),
      phoneNumber: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      province: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
      nik: faker.random.number()
    }
    doctors.push(newDoctor)
  }
  // console.log(`doctors `, doctors)
  Doctor.insertMany(doctors)
}

export default createDoctors