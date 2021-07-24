import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Container({ users }) {
  return (
    <div className="container">
      {users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <h3>
              {" "}
              <Link
                to={{
                  pathname: `${user.id}`,
                  state: { user },
                }}
              >
                {user.name}{" "}
              </Link>
            </h3>
            <img src={user.image} />
            <h4>
              {" "}
              RETURN : <span> {user.return} </span>{" "}
            </h4>
            <h4>
              {" "}
              RISK : <span> {user.risk} </span>{" "}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
