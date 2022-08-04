const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  type Face {
    eyeballs: Int!
    noseDescription: String 
  }
	interface Animal {
	  id: ID!	  
	  name: String!
	  face: Face
	  image: String!
	  type: String!
	}
	type Monkey implements Animal {
	  id: ID!	  
	  name: String!
	  face: Face
	  image: String!
	  type: String!
	}
	type Bird implements Animal {
	  id: ID!	  
	  name: String!
	  face: Face
	  image: String!
	  type: String!
	}


	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each. In this
	# case, the "books" query returns an array of zero or more Books (defined above).
	type Query {
		animals: [Animal]
		getAnimalById(id: ID): Animal
	}
`;
const animals = [
  {
      id: "cool-id-1",
      name: "Cool monkey",
      face: {
        noseDescription: "flat",
        eyeballs: 2,
      },
      image:
        "https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      type: 'monkey'
  },
  {
      id: "cool-id-2",
      name: "Angry ape",
      face: {
        noseDescription: "flat",
        eyeballs: 2,
      },
      image:
        "https://images.unsplash.com/photo-1541804536-78217d100fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      type: "monkey"
  },
  {
      id: "cool-id-2",
      name: "Pestering",
      face: {
        noseDescription: "long",
        eyeballs: 2,
      },
      image:
        "https://media.istockphoto.com/photos/colorful-cute-toucan-tropical-bird-in-brazilian-amazon-blurred-picture-id495292220?b=1&k=20&m=495292220&s=170667a&w=0&h=68in2CnzbcibA7hBNXJCVzYbS8qqXj-VUv2NHlsMT1E=",
      type: "bird"
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    animals: () => animals,
  },
  Animal: {
    __resolveType: (animal) => {
      let type;
      if (animal.type === "monkey") {
        type = "Monkey";
      }
      if (animal.type === "bird") {
        type = "Bird";
      }
      return type;
    },
  },
};
const {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  introspection: true,
  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
   **/
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: false })],
});

// The `listen` method launches a web server.
server.listen({ port: 4545 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
