import { GenericTable } from "../components/GenericTable";

export default function Students() {
  const mockData = [
    { name: "John Doe", rollNumber: "101", grade: "12-A", contact: "555-1001" },
    {
      name: "Jane Smith",
      rollNumber: "102",
      grade: "10-B",
      contact: "555-1002",
    },
    { name: "Sam Brown", rollNumber: "103", grade: "6-A", contact: "555-1003" },
    {
      name: "Lisa White",
      rollNumber: "104",
      grade: "5-C",
      contact: "555-1004",
    },
    {
      name: "Aarav Patel",
      rollNumber: "105",
      grade: "10-A",
      contact: "555-1005",
    },
    {
      name: "Meera Nair",
      rollNumber: "106",
      grade: "9-B",
      contact: "555-1006",
    },
    {
      name: "Rohan Sharma",
      rollNumber: "107",
      grade: "11-C",
      contact: "555-1007",
    },
    {
      name: "Anika Verma",
      rollNumber: "108",
      grade: "7-A",
      contact: "555-1008",
    },
    { name: "David Lee", rollNumber: "109", grade: "8-C", contact: "555-1009" },
    {
      name: "Sophia Kim",
      rollNumber: "110",
      grade: "12-B",
      contact: "555-1010",
    },
    {
      name: "Kabir Singh",
      rollNumber: "111",
      grade: "6-B",
      contact: "555-1011",
    },
    {
      name: "Emma Johnson",
      rollNumber: "112",
      grade: "9-C",
      contact: "555-1012",
    },
    {
      name: "Noah Wilson",
      rollNumber: "113",
      grade: "5-A",
      contact: "555-1013",
    },
    {
      name: "Olivia Davis",
      rollNumber: "114",
      grade: "10-A",
      contact: "555-1014",
    },
    {
      name: "Liam Brown",
      rollNumber: "115",
      grade: "11-B",
      contact: "555-1015",
    },
    {
      name: "Ethan Jones",
      rollNumber: "116",
      grade: "7-C",
      contact: "555-1016",
    },
    {
      name: "Aisha Khan",
      rollNumber: "117",
      grade: "8-B",
      contact: "555-1017",
    },
    {
      name: "Ryan Clark",
      rollNumber: "118",
      grade: "12-C",
      contact: "555-1018",
    },
    {
      name: "Nina George",
      rollNumber: "119",
      grade: "6-A",
      contact: "555-1019",
    },
    {
      name: "Arjun Mehta",
      rollNumber: "120",
      grade: "9-A",
      contact: "555-1020",
    },
    {
      name: "Priya Iyer",
      rollNumber: "121",
      grade: "10-C",
      contact: "555-1021",
    },
    {
      name: "Daniel Kim",
      rollNumber: "122",
      grade: "7-B",
      contact: "555-1022",
    },
    { name: "Sara Ali", rollNumber: "123", grade: "5-B", contact: "555-1023" },
    {
      name: "Henry Adams",
      rollNumber: "124",
      grade: "11-A",
      contact: "555-1024",
    },
    {
      name: "Isabella Lopez",
      rollNumber: "125",
      grade: "8-A",
      contact: "555-1025",
    },
    {
      name: "Karan Gupta",
      rollNumber: "126",
      grade: "9-B",
      contact: "555-1026",
    },
    {
      name: "Mia Thomas",
      rollNumber: "127",
      grade: "6-C",
      contact: "555-1027",
    },
    {
      name: "Lucas Green",
      rollNumber: "128",
      grade: "12-A",
      contact: "555-1028",
    },
    {
      name: "Aditi Joshi",
      rollNumber: "129",
      grade: "10-B",
      contact: "555-1029",
    },
    {
      name: "Jacob Martin",
      rollNumber: "130",
      grade: "11-C",
      contact: "555-1030",
    },
  ];
   const columns = [
    { header: "Student Name", accessor: "name" },
    { header: "Roll Number", accessor: "rollNumber" },
    { header: "Grade", accessor: "grade" },
    { header: "Contact Number", accessor: "contact" },
  ];

  return (
    <GenericTable
      title="Students List"
      columns={columns}
      data={mockData}
    />
  );
}

