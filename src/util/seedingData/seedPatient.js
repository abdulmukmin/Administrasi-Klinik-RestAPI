import faker from 'faker'
import Patient from '../../models/patient'

function createPatient() {
  let patients = []
  let gender = ['male', 'female']
  let rt = ['001', '002', '003', '004', '005', '006', '007']
  let rw = ['001', '002', '003']
  let status = ['single', 'married', 'divorce']
  let bloodType = ['A', 'B', 'AB', 'O']
  for (let i = 0; i < 5; ++i) {
    let newPatient =  {
      fullname: faker.name.firstName() + ' ' + faker.name.lastName(),
      picture: faker.image.imageUrl(),
      gender: gender[Math.floor(Math.random() * 2)],
      email: faker.internet.email(),
      birthdate: faker.date.past(),
      birthplace: faker.address.city(),
      phoneNumber: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      address_rt: rt[Math.floor(Math.random() * 7)],
      address_rw: rw[Math.floor(Math.random() * 3)],
      villageOffice: 'gandaria selatan',
      subDistrict: 'cilandak',
      city: faker.address.city(),
      province: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
      nik: faker.random.number(),
      marriageStatus: status[Math.floor(Math.random() * 3)],
      bloodType: bloodType[Math.floor(Math.random() * 2)],
      occupation: faker.name.jobTitle(),
    }
    patients.push(newPatient)
  }
  // console.log(`patients `, patients)
  Patient.insertMany(patients)
}

export default createPatient