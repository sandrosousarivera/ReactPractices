import { useState } from "react";
import { people } from "../constants/people";
import { emails } from "../constants/emails";
import { calendar } from "../constants/calendar";

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
    </div>
  );
}

export default App;
