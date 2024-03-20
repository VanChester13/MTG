import React from "react";
import Header from "./components/Header";
import { setDataInState } from "./redux/actions/list";
import Main from "./components/Main";
import data from "../src/data";
import { store } from ".";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(setDataInState(data));
  }

  render () {
    return (
      <div id="main-container">
      <Header />
      <Main data={data}/>
    </div>
    )
  }
}
export default App;