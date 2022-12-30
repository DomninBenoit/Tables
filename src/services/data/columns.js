const columns = [
  {
    dataIndex: "firstName",
    title: "First Name",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
  {
    dataIndex: "lastName",
    title: "Last Name",
    sorter: (a, b) => {
      return a.lastName > b.lastName;
    },
  },
  {
    dataIndex: "startDate",
    title: "Start Date",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
  {
    dataIndex: "department",
    title: "Department",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
  {
    dataIndex: "dateOfBirth",
    title: "Date of Birth",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
  {
    dataIndex: "street",
    title: "Street",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
  {
    dataIndex: "city",
    title: "City",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
  {
    dataIndex: "state",
    title: "State",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
  {
    dataIndex: "zipCode",
    title: "Zip Code",
    sorter: (a, b) => {
      return a.firstName > b.firstName;
    },
  },
];

export default columns;
