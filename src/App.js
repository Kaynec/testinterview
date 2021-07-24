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
        "https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg",
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
        "https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg",
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
        "https://images.freeimages.com/images/large-previews/bd7/falloxbow-1058032.jpg",
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
