import { useState, useEffect, useCallback } from "react";

import Table from "./components/Table";

import fetchData from "./utils/fetchData";
import getUrl from "./utils/getUrl";

import "./App.css";

function App() {
  const [names, setNames] = useState();
  const [technologies, setTechnologies] = useState();
  const [ages, setAges] = useState({});
  const [allDataIsReady, setAllDataIsReady] = useState(false);
  const [errors, setErrors] = useState(null);

  const getData = useCallback(async (url, handler) => {
    try {
      const data = await fetchData(url);
      handler(data);
    } catch (error) {
      setErrors(error);
    }
  }, []);

  useEffect(() => {
    if (!names?.length) {
      getData(getUrl("names"), setNames);
    }
  }, [getData, names]);

  useEffect(() => {
    if (!technologies?.length) {
      getData(getUrl("tech"), setTechnologies);
    }
  }, [getData, technologies])

  useEffect(() => {
    if (names?.length) {
      for (let name of names) {
        const agesHandler = addAges(name);
        getData(getUrl("getDate/" + name), agesHandler);
      }
    }
  }, [names, getData]);

  useEffect(() => {
    if (names?.length === Object.keys(ages)?.length) {
      setAllDataIsReady(true);
    }
  }, [names, ages]);

  function addAges(name) {
    return function addAgesWithData(data) {
      setAges((state) => {
        return {
          ...state,
          [name]: data,
        };
      });
    };
  }

  if (errors) {
    return <div>There was an error while loading data</div>;
  }

  if (!allDataIsReady) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="App">
      <Table names={names} technologies={technologies} ages={ages} />
    </div>
  );
}

export default App;
