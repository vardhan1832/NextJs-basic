const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function Id({params}) {
  const id = params.id
  let name;

  switch (id) {
    case "1":
      name = `${details[0].name},${details[0].role}`;
      break;
    case "2":
      name = `${details[1].name},${details[1].role}`;
      break;
    case "3":
      name = `${details[2].name},${details[2].role}`;
      break;
    default:
      name = "Developer doesn't exist..";
  }

  return <h1>{name}</h1>;
}

export default Id;
