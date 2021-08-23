import { useEffect, useCallback, useReducer } from "react";

import Table from "./components/Table";
import { appReducer, initialState } from "./reducer";
import constants from "./constants";
import fetchData from "./utils/fetchData";
import getUrl from "./utils/getUrl";

import "./styles/App.css";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log("RENDER");
  console.log(state);

  const getData = useCallback(async (paths) => {
    dispatch({ type: constants.INIT_REQUEST });

    try {
      const names = await fetchData(paths.names);
      const technologies = await fetchData(paths.tech);
      const ages = await Promise.all(
        names.map(async (name) => {
          const data = await fetchData(paths.ages + name);
          return [name, data];
        })
      );

      dispatch({
        type: constants.REQUEST_SUCCESS,
        payload: {
          names,
          technologies,
          ages: Object.fromEntries(ages),
        },
      });
    } catch (error) {
      dispatch({
        type: constants.REQUEST_FAILURE,
        payload: error.message,
      });
    }
  }, []);

  useEffect(() => {
    const paths = {
      names: getUrl("names"),
      tech: getUrl("tech"),
      ages: getUrl("getDate/"),
    };
    getData(paths);
  }, [getData]);

  if (state.isError) {
    return <div>There was an error while loading data</div>;
  }

  if (state.isLoading) {
    return <div>Loading data...</div>;
  }

  return (
    <div className="App">
      <Table
        names={state.names}
        technologies={state.technologies}
        ages={state.ages}
      />
    </div>
  );
}

export default App;
