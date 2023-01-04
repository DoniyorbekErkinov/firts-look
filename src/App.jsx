import { createRoot } from "react-dom/client";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClinet}>
        <header>
          <Link to={"/"}>Adopt Me</Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </QueryClientProvider>
    </HashRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { animal: "Dog", name: "Buck", age: 12 }),
//     React.createElement(Pet, { animal: "Cat", name: "Fat", age: 4 }),
//     React.createElement(Pet, { animal: "Cat", name: "Cuteee", age: 9 }),
//   ]);
// };
