import React from "react";
import { VictoryBar, VictoryChart } from "victory";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function UserDetail(props) {
  // using the passed in user via location hook
  const location = useLocation();
  const user = location.state.user;

  return (
    <>
      {/* Rendering a card with user image and name and other stuff + user chart  */}
      <div className="user">
        <h1> {user.name} </h1>
        <img src={user.image} />
        <h3>
          {" "}
          RETURN : <span> {user.return} </span>{" "}
        </h3>
        <h3>
          {" "}
          RISK : <span> {user.risk} </span>
        </h3>

        <div className="timestamp">
          {user.profit.map((el) => {
            return (
              <h3>
                {" "}
                {el.time} : {el.value}{" "}
              </h3>
            );
          })}
        </div>

        <div style={{ width: "50%" }}>
          <VictoryChart>
            <VictoryBar data={user.profit} x="time" y="value" />
          </VictoryChart>
        </div>
        <Link to="/"> GO BACK</Link>
      </div>
      ;
    </>
  );
}
