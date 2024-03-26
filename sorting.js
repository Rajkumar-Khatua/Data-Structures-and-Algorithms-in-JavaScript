// Sample Data's
const appointments = [
  {
    patient_name: "John Doe",
    mobile_number: "123-456-7890",
    appointment_date: "2024-02-26",
    appointment_time: "10:00 AM",
    doctor: "Dr. Smith",
    injury: "Sprained ankle",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Jane Smith",
    mobile_number: "987-654-3210",
    appointment_date: "2024-02-26",
    appointment_time: "11:30 AM",
    doctor: "Dr. Johnson",
    injury: "Back pain",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Michael Johnson",
    mobile_number: "456-789-0123",
    appointment_date: "2024-02-26",
    appointment_time: "1:00 PM",
    doctor: "Dr. Lee",
    injury: "Headache",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Emily Davis",
    mobile_number: "789-012-3456",
    appointment_date: "2024-02-26",
    appointment_time: "2:30 PM",
    doctor: "Dr. Patel",
    injury: "Sore throat",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "David Wilson",
    mobile_number: "321-654-9870",
    appointment_date: "2024-02-26",
    appointment_time: "4:00 PM",
    doctor: "Dr. Garcia",
    injury: "Fever",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    patient_name: "Sarah Brown",
    mobile_number: "654-321-0987",
    appointment_date: "2024-02-26",
    appointment_time: "5:30 PM",
    doctor: "Dr. Kim",
    injury: "Cough",
    img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

/**
 * Sorts an array of appointments by patient name in ascending order.
 *
 * @param {Array} appointments - The array of appointments to be sorted.
 * @returns {Array} - The sorted array of appointments.
 */
const sortByNameAsc = (appointments) => {
  return appointments.sort((a, b) => {
    if (a.patient_name > b.patient_name) {
      return 1;
    } else {
      return -1;
    }
  });
};
console.log("Asc Order")
console.log(sortByNameAsc(appointments));

const sortNameDesc = (appointments) => {
  return appointments.sort((a, b) => {
    if (a.patient_name > b.patient_name) {
      return -1;
    } else {
      return 1;
    }
  });
};
console.log("Desc Order")

console.log(sortNameDesc(appointments));