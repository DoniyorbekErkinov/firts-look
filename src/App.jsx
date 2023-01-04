import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import "./style.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { animal: "Dog", name: "Buck", age: 12 }),
//     React.createElement(Pet, { animal: "Cat", name: "Fat", age: 4 }),
//     React.createElement(Pet, { animal: "Cat", name: "Cuteee", age: 9 }),
//   ]);
// };
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>Adopt Me</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
