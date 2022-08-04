import React from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { Get_AnimalsDocument, useGet_AnimalsQuery } from "./generated/graphql";

function App() {
  const { loading, error, data } = useGet_AnimalsQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      {!!data?.animals &&
        data.animals.map(
          (animal) =>
            !!animal && (
              <div className="item">
                <img
                  src={animal.image}
                  style={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                  }}
                />
                <div className="title">{animal.name}</div>
                <div className="face-data">
                  {!!animal.face && (
                    <div>
                      <div>Nose Description: {animal.face.noseDescription}</div>
                      <div>Number of ears: {0 + animal.face.ears}</div>
                    </div>
                  )}
                </div>
              </div>
            )
        )}
    </div>
  );
}

export default App;
