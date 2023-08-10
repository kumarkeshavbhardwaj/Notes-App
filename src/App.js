import "./App.css";
import DisplayNote from "./components/DisplayNote";
import EmptyNotes from "./components/EmptyNotes";
import CreateNote from "./components/CreateNote";


function App() {
  return (
    <>
      <div className="logo">Notes App</div>
      <div className="container">
      <CreateNote></CreateNote>
      {/* <EmptyNotes></EmptyNotes> */}
        <DisplayNote></DisplayNote>x
      </div>
    </>
  );
}

export default App;
