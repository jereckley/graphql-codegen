import React from "react";
import "./App.css";
import {gql, useQuery} from "@apollo/client";

const GET_ANIMALS = gql`
  query GET_ANIMALS {
   animals {
      ... on Monkey {
        id
        __typename
        name
        face {
          noseDescription
          eyeballs
        }
        image
        type
      }
      ... on Bird {
        id
        __typename
        name
        face {
          noseDescription
          eyeballs
        }
        image
        type
      }
    }
  }
`;

function App() {

  const { loading, error, data } = useQuery(GET_ANIMALS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
    	{data.animals.map((animal: any) => (
		<div className="item">
			<img src={animal.image} style={{maxWidth: "300px", maxHeight: "300px"}}/>
		<div className="title">{animal.name}</div>
		<div className="face-data">
		<div>Nose Description: {animal.face.noseDescription}</div>
		<div>Number of Eyes: {0 + animal.face.eyes}</div>
		</div>
		</div>
	))}
    </div>
  );
}

export default App;
