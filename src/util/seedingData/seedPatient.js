import faker from 'faker'
import Doctor from '../../models/doctor'

function createPatient() {
  let doctors = []
  let gender = ['male', 'female']
  for (let i = 0; i < 5; ++i) {
    let newDoctor =  {
      fullname: faker.name.firstName() + ' ' + faker.name.lastName(),
      username: faker.name.findName(),
      gender: gender[Math.floor(Math.random() * 2)],
      email: faker.internet.email(),
      birthdate: faker.date.past(),
      birthplace: faker.address.city(),
      phoneNumber: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      address_rt: faker.address.streetAddress(),
      address_rw: faker.address.streetAddress(),
      villageOffice: faker.address.streetAddress(),
      subDistrict: faker.address.streetAddress(),
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

export default createPatient