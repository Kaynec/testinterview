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
        "https://cdn.pixabay.com/photo/2017/06/05/07/59/octopus-2373177_960_720.png",
      return: "17%",
      risk: "7%",
      id: uuid(),
      profit: [
        {
          time: "2019",
          value: "10%",
        },
        {
          time: "2020",
          value: "23%",
        },

        {
          time: "2021",
          value: "36%",
        },
      ],
    },

    {
      name: "Ali Yazdani",
      image:
        "https://cdn.pixabay.com/photo/2021/06/29/07/35/woman-6373424_960_720.jpg",
      return: "17%",
      risk: "7%",
      id: uuid(),
      profit: [
        {
          time: "2019",
          value: "10%",
        },
        {
          time: "2020",
          value: "23%",
        },

        {
          time: "2021",
          value: "36%",
        },
      ],
    },

    {
      name: "Ali Yazdani",
      image:
        "https://cdn.pixabay.com/photo/2021/07/05/11/23/palmtrees-6388901_960_720.jpg",
      return: "17%",
      risk: "7%",
      id: uuid(),
      profit: [
        {
          time: "2019",
          value: "10%",
        },
        {
          time: "2020",
          value: "23%",
        },

        {
          time: "2021",
          value: "36%",
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
