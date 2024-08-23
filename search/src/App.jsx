import { useState } from "react";

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Ana Gomez",
  },
  {
    id: "people-03",
    title: "Carlos Sanchez",
  },
  {
    id: "people-04",
    title: "Maria Rodriguez",
  },
  {
    id: "people-05",
    title: "Luis Hernandez",
  },
  {
    id: "people-06",
    title: "Sofia Martinez",
  },
  {
    id: "people-07",
    title: "Miguel Torres",
  },
  {
    id: "people-08",
    title: "Laura Diaz",
  },
  {
    id: "people-09",
    title: "Jorge Morales",
  },
  {
    id: "people-10",
    title: "Lucia Romero",
  },
  {
    id: "people-11",
    title: "Pedro Fernandez",
  },
  {
    id: "people-12",
    title: "Isabella Vargas",
  },
  {
    id: "people-13",
    title: "Ricardo Castro",
  },
  {
    id: "people-14",
    title: "Gabriela Ruiz",
  },
  {
    id: "people-15",
    title: "David Cruz",
  },
  {
    id: "people-16",
    title: "Valentina Ortiz",
  },
  {
    id: "people-17",
    title: "Diego Rivas",
  },
  {
    id: "people-18",
    title: "Camila Suarez",
  },
  {
    id: "people-19",
    title: "Pablo Mendoza",
  },
  {
    id: "people-20",
    title: "Sara Flores",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Mentoring",
  },
  {
    id: "calendar-02",
    title: "Proposal review session",
  },
  {
    id: "calendar-03",
    title: "Team meeting",
  },
  {
    id: "calendar-04",
    title: "Project kickoff",
  },
  {
    id: "calendar-05",
    title: "Client presentation",
  },
  {
    id: "calendar-06",
    title: "Design workshop",
  },
  {
    id: "calendar-07",
    title: "Sprint planning",
  },
  {
    id: "calendar-08",
    title: "Code review",
  },
  {
    id: "calendar-09",
    title: "Brainstorming session",
  },
  {
    id: "calendar-10",
    title: "User testing",
  },
  {
    id: "calendar-11",
    title: "One-on-one meeting",
  },
  {
    id: "calendar-12",
    title: "Weekly sync-up",
  },
  {
    id: "calendar-13",
    title: "Retrospective",
  },
  {
    id: "calendar-14",
    title: "Feedback session",
  },
  {
    id: "calendar-15",
    title: "Strategy session",
  },
  {
    id: "calendar-16",
    title: "Planning workshop",
  },
  {
    id: "calendar-17",
    title: "All-hands meeting",
  },
  {
    id: "calendar-18",
    title: "Training session",
  },
  {
    id: "calendar-19",
    title: "Roadmap review",
  },
  {
    id: "calendar-20",
    title: "Customer feedback session",
  },
];

const emails = [
  {
    id: "email-01",
    title: "Project update",
  },
  {
    id: "email-02",
    title: "Client follow-up",
  },
  {
    id: "email-03",
    title: "Weekly newsletter",
  },
  {
    id: "email-04",
    title: "Meeting reminder",
  },
  {
    id: "email-05",
    title: "Team announcement",
  },
  {
    id: "email-06",
    title: "Event invitation",
  },
  {
    id: "email-07",
    title: "Bug report",
  },
  {
    id: "email-08",
    title: "Feedback request",
  },
  {
    id: "email-09",
    title: "Document submission",
  },
  {
    id: "email-10",
    title: "Payment confirmation",
  },
  {
    id: "email-11",
    title: "Account activation",
  },
  {
    id: "email-12",
    title: "Service notification",
  },
  {
    id: "email-13",
    title: "Offer acceptance",
  },
  {
    id: "email-14",
    title: "Performance review",
  },
  {
    id: "email-15",
    title: "New feature announcement",
  },
  {
    id: "email-16",
    title: "Password reset",
  },
  {
    id: "email-17",
    title: "Security alert",
  },
  {
    id: "email-18",
    title: "Promotion notification",
  },
  {
    id: "email-19",
    title: "Subscription renewal",
  },
  {
    id: "email-20",
    title: "Survey invitation",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");

        break;

      default:
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");

        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");

        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");

        break;
    }
  }

  return (
    <div>
      <button onClick={handleClick} name="all">
        All
      </button>
      <button onClick={handleClick} name="people">
        People
      </button>
      <button onClick={handleClick} name="calendar">
        Calendar
      </button>
      <button onClick={handleClick} name="emails">
        Emails
      </button>

      <div>
        {data.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
