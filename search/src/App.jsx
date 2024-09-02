import { useState } from "react";
import { people } from "/Users/sandro/LOCAL/pyoyectos react/search/constants/people.jsx";
import { emails } from "/Users/sandro/LOCAL/pyoyectos react/search/constants/emails.jsx";
import { calendar } from "/Users/sandro/LOCAL/pyoyectos react/search/constants/calendar.jsx";
import SearchBar from "./components/searchBar";

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);

  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");
  const [count, setCount] = useState(0);

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
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <SearchBar items={data} onItemSelected={() => {}} />
    </div>
  );
}

export default App;
