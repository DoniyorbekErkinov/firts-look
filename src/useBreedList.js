import { useQuery } from "@tanstack/react-query";
// import { useState, useEffect } from "react";
import fetchBreedList from "./fetchBreedList";

// const localCache = {};

export default function useBreedList(animal) {
  /**
   * custom hook with query
   */
  const result = useQuery(["animals", animal], fetchBreedList);
  return [result?.data?.breeds ?? [], result.status];
  /**
   * custom hook with query
   */

  /**
   * custom hook to fetch data
   */
  // const [breedList, setBreedList] = useState([]);
  // const [status, setStatus] = useState("unloaded");
  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([]);
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal]);
  //   } else {
  //     requestBreedList();
  //   }

  //   async function requestBreedList() {
  //     setBreedList([]);
  //     setStatus("loading");

  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  //     );
  //     const json = await res.json();
  //     localCache[animal] = json.breeds || [];
  //     setBreedList(localCache[animal]);
  //     setStatus("loaded");
  //   }
  // }, [animal]);
  // return [breedList, status];
  /**
   * custom hook to fetch data
   */
}
