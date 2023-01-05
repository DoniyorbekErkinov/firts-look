import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import { useState, lazy, Suspense } from "react";
import "./index.css";
/**
 * This is code siplitting it can be usefull in big apps
 */
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));
/**
 * This is code siplitting it can be usefull in big apps
 */

const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
      className="p-0 m-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperC.jpg)",
      }}
    >
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClinet}>
          {/*
           * This is code siplitting it can be usefull in big apps
           */}
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🐶</h2>
              </div>
            }
          >
            {/*
             * This is code siplitting it can be usefull in big apps
             */}
            <header className="w-full mb-10 p-7 text-center bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500">
              <Link
                to={"/"}
                className="text-6xl text-white hover:text-gray-300"
              >
                Adopt Me
              </Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </div>
  );
};
export default App;

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, { animal: "Dog", name: "Buck", age: 12 }),
//     React.createElement(Pet, { animal: "Cat", name: "Fat", age: 4 }),
//     React.createElement(Pet, { animal: "Cat", name: "Cuteee", age: 9 }),
//   ]);
// };
