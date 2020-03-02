// user
const role = ['doctor', 'nurse', 'cashier']

const dokter = {
  fullname: 'ujang sibujang',
  title: 'dr. / drg.',
  username: 'ujang',
  password: '12345',
  email: '',
  birthdate: '17 agustus 1945',
  birthplace: 'jakarta',
  phoneNumber: '0812123456',
  address: 'Jl. Bundaran HI',
  city: 'jaksel', // join table
  province: 'DKI Jakarta',
  zipCode: '12345', // join table
  country: 'Indonesia', // join table
  nik: '8282917200002',
  specialization: 'umum/gigi', // join table
}

const cashier = {
  fullname: 'ujang sibujang',
  title: 'dr. / drg.',
  username: 'ujang',
  password: '12345',
  email: '',
  birthdate: '17 agustus 1945',
  birthplace: 'jakarta',
  phoneNumber: '0812123456',
  address: 'Jl. Bundaran HI',
  city: 'jaksel', // join table
  province: 'DKI Jakarta',
  zipCode: '12345', // join table
  country: 'Indonesia', // join table
  nik: '8282917200002',
}

const nurse = {
  fullname: 'ujang sibujang',
  title: 'dr. / drg.',
  username: 'ujang',
  password: '12345',
  email: '',
  birthdate: '17 agustus 1945',
  birthplace: 'jakarta',
  phoneNumber: '0812123456',
  address: 'Jl. Bundaran HI',
  city: 'jaksel', // join table
  province: 'DKI Jakarta',
  zipCode: '12345', // join table
  country: 'Indonesia', // join table
  nik: '8282917200002',
}

// patient always update
const illness = ['']
const patient = {
  fullname: 'ujang sibujang',
  title: 'dr. / drg.',
  username: 'ujang',
  password: '12345',
  birthdate: '17 agustus 1945',
  birthplace: 'jakarta',
  phoneNumber: '0812123456',
  address: 'Jl. Bundaran HI',
  city: 'jaksel', // join table
  province: 'DKI Jakarta',
  zipCode: '12345', // join table
  country: 'Indonesia', // join table
  nik: '8282917200002',
  bpjs: '',
  tension: '',
  weight: '',
  height: '',
  bloodPressure: '',
  bloodType: '',
  diagnozed: '',
  registrationPayment: 20000
}

// receipt
const medicine = []
const receipt = {
  patientFullame: '',
  doctoreFullname: '',
  nurseFullname: '',
  cashierFullname: '',
  medicine: [],
}

// visit per date and time
const visitor = [
  {
    patientFullname: '',
    dateCome: '',
    birthplace: '',
    birthdate: '',
    phoneNumber: '',
    address: '',
    nik: '',
    bpjs: '',
    tension: '',
    weight: '',
    height: '',
    bloodPressure: '',
    bloodType: '',
    diagnozed: '',
    handling: '',
    doctorVisited: '',
    cashierFullname: '',
    nurseFullname: '',
    complaint: '',
    illness: '',
    payment: [
      {
        cash: 20000
      },
      {
        debit: 20000
      },
      {
        bpjs: 20000
      }
    ],
    medicine: [
      {
        name: 'panu',
        dose: '10mg x 7',
        information: 'berapa kali sehari'
      }
    ],
    checkingResult: ''
  }
]

// illness
const illness = {
  name: '',
  medicine: [],
  patient: [],
  cashier: [],
  doctorFullname: [],
  diagnozed: '',
  price: ''
}

// medicine
const medicine = [
  {
    name: '',
    brand: '',
    price: ''
  }
]