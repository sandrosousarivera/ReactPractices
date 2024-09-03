// import { useState } from "react";
// import { people } from "/Users/sandro/LOCAL/pyoyectos react/search/constants/people.jsx";
// import { emails } from "/Users/sandro/LOCAL/pyoyectos react/search/constants/emails.jsx";
// import { calendar } from "/Users/sandro/LOCAL/pyoyectos react/search/constants/calendar.jsx";
// import SearchBar from "./components/searchBar/searchBar";
// import styled from "styled-components";

// //STYLED COMPONENTS//

// const Button = styled.button`
//   padding: 10px;
//   border-radius: 5px;
//   border: none;
//   background-color: white;
//   border: solid 1px #ccc;
//   cursor: pointer;

//   &:hover {
//     background-color: #efefef;
//   }
// `;

// function App() {
//   const [data, setData] = useState([...people, ...calendar, ...emails]);

//   const [selection, setSelection] = useState(null);
//   const [currentOption, setCurrentOption] = useState("all");
//   const [count, setCount] = useState(0);

//   function handleClick(e) {
//     const op = e.target.name;

//     switch (op) {
//       case "all":
//         setData([...people, ...calendar, ...emails]);
//         setCurrentOption("all");

//         break;

//       default:
//       case "calendar":
//         setData([...calendar]);
//         setCurrentOption("calendar");

//         break;

//       case "people":
//         setData([...people]);
//         setCurrentOption("people");

//         break;

//       case "emails":
//         setData([...emails]);
//         setCurrentOption("emails");

//         break;
//     }
//   }

//   function handleItemSelected(item) {
//     setSelection(item);
//   }

//   return (
//     <div>
//       <Button onClick={handleClick} name="all">
//         All
//       </Button>
//       <Button onClick={handleClick} name="people">
//         People
//       </Button>
//       <Button onClick={handleClick} name="calendar">
//         Calendar
//       </Button>
//       <Button onClick={handleClick} name="emails">
//         Emails
//       </Button>
//       {selection ? <div>You selected: {selection.title}</div> : ""}
//       <SearchBar items={data} onItemSelected={handleItemSelected} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { animals } from "../constants/animals.jsx";
import { countries } from "../constants/countries.jsx";
import { cars } from "../constants/cars.jsx";
import SearchBar from "./components/searchBar/searchBar";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  width: 100%;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 1px #ccc;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #efefef;
  }

  &.active {
    background-color: #ddd;
  }
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const SelectionDisplay = styled.div`
  margin: 20px 0;
  font-size: 16px;
  color: #333;
`;

function App() {
  const [data, setData] = useState([...animals, ...cars, ...countries]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...animals, ...cars, ...countries]);
        setCurrentOption("all");
        break;

      case "cars":
        setData([...cars]);
        setCurrentOption("cars");
        break;

      case "animals":
        setData([...animals]);
        setCurrentOption("animals");
        break;

      case "countries":
        setData([...countries]);
        setCurrentOption("countries");
        break;

      default:
        break;
    }
  }

  function handleItemSelected(item) {
    setSelection(item);
  }

  return (
    <Container>
      <Header>
        <h1>My App</h1>
      </Header>
      <ButtonContainer>
        <Button
          onClick={handleClick}
          name="all"
          className={currentOption === "all" ? "active" : ""}
        >
          All
        </Button>
        <Button
          onClick={handleClick}
          name="animals"
          className={currentOption === "animals" ? "active" : ""}
        >
          Animals
        </Button>
        <Button
          onClick={handleClick}
          name="cars"
          className={currentOption === "cars" ? "active" : ""}
        >
          Cars
        </Button>
        <Button
          onClick={handleClick}
          name="countries"
          className={currentOption === "countries" ? "active" : ""}
        >
          Countries
        </Button>
      </ButtonContainer>
      <SelectionDisplay>
        {selection ? `You selected: ${selection.title}` : ""}
      </SelectionDisplay>
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </Container>
  );
}

export default App;
