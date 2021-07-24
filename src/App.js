import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import UserDetail from "./components/UserDetail";
import { v4 as uuid } from "uuid";
function App() {
  // the array of items passed to container that passed it to the user page
  const users = [
    {
      name: "Ali Yazdani",
      image:
        "https://images.unsplash.com/photo-1626966489687-56fd3d082acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=606&q=80",
      return: "17%",
      risk: "7%",
      id: uuid(),
      profit: [
        {
          time: "2012",
          value: "12%",
        },

        {
          time: "2013",
          value: "19%",
        },

        {
          time: "2015",
          value: "10%",
        },
      ],
    },

    {
      name: "Ali Yazdani",
      image:
        "https://images.unsplash.com/photo-1626966489687-56fd3d082acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=606&q=80",
      return: "17%",
      risk: "7%",
      id: uuid(),
      profit: [
        {
          time: "2012",
          value: "12%",
        },

        {
          time: "2013",
          value: "19%",
        },

        {
          time: "2015",
          value: "10%",
        },
      ],
    },

    {
      name: "Ali Yazdani",
      image:
        "https://images.unsplash.com/photo-1626966489687-56fd3d082acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=606&q=80",
      return: "17%",
      risk: "7%",
      id: uuid(),
      profit: [
        {
          time: "2012",
          value: "12%",
        },

        {
          time: "2013",
          value: "19%",
        },

        {
          time: "2015",
          value: "10%",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Container users={users} />
          </Route>
          <Route exact path="/:id">
            <UserDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
