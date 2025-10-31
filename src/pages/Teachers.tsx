import { GenericTable } from "../components/GenericTable";

export default function Teachers() {
  const teachersData = [
    {
      name: "Rajesh Kumar",
      employeeId: "T101",
      subject: "Mathematics",
      experience: "12 years",
      contact: "9876543210",
    },
    {
      name: "Priya Sharma",
      employeeId: "T102",
      subject: "Science",
      experience: "8 years",
      contact: "9876543211",
    },
    {
      name: "Amit Verma",
      employeeId: "T103",
      subject: "English",
      experience: "10 years",
      contact: "9876543212",
    },
    {
      name: "Neha Patel",
      employeeId: "T104",
      subject: "Social Studies",
      experience: "7 years",
      contact: "9876543213",
    },
    {
      name: "Ravi Singh",
      employeeId: "T105",
      subject: "Computer Science",
      experience: "5 years",
      contact: "9876543214",
    },
    {
      name: "Anita Nair",
      employeeId: "T106",
      subject: "Biology",
      experience: "11 years",
      contact: "9876543215",
    },
    {
      name: "Suresh Iyer",
      employeeId: "T107",
      subject: "Physics",
      experience: "14 years",
      contact: "9876543216",
    },
    {
      name: "Meena George",
      employeeId: "T108",
      subject: "Chemistry",
      experience: "9 years",
      contact: "9876543217",
    },
    {
      name: "Arun Das",
      employeeId: "T109",
      subject: "History",
      experience: "6 years",
      contact: "9876543218",
    },
    {
      name: "Kavita Pillai",
      employeeId: "T110",
      subject: "Geography",
      experience: "13 years",
      contact: "9876543219",
    },
    {
      name: "Vikram Bansal",
      employeeId: "T111",
      subject: "Economics",
      experience: "10 years",
      contact: "9876543220",
    },
    {
      name: "Shalini Rao",
      employeeId: "T112",
      subject: "Political Science",
      experience: "8 years",
      contact: "9876543221",
    },
    {
      name: "Nikhil Kapoor",
      employeeId: "T113",
      subject: "Physical Education",
      experience: "4 years",
      contact: "9876543222",
    },
    {
      name: "Aarti Joshi",
      employeeId: "T114",
      subject: "Hindi",
      experience: "9 years",
      contact: "9876543223",
    },
    {
      name: "Deepak Mehta",
      employeeId: "T115",
      subject: "Art",
      experience: "6 years",
      contact: "9876543224",
    },
  ];

  const columns = [
    { header: "Teacher Name", accessor: "name" },
    { header: "Employee ID", accessor: "employeeId" },
    { header: "Subject", accessor: "subject" },
    { header: "Experience", accessor: "experience" },
    { header: "Contact Number", accessor: "contact" },
  ];

  return (
    <GenericTable
      title="Teachers List"
      columns={columns}
      data={teachersData}
    />
  );
}
