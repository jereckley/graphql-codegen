##To Start:

in backend folder: 
npm install
node index.js

in frontend folder: 
npm install
npm run start

##To pull down schema
install rover (more info -> https://www.apollographql.com/docs/rover/getting-started/)
npm install -g @apollo/rover

in frontend folder:
add new command to scripts in package.json: "update-schema": "rover graph introspect http://localhost:4545/graphql > schema.graphql",
create a new file name .graphqlconfig and add:
{
  "name": "animals graph",
  "schema": ["schema.graphql"],
}

install any graphql plugin for your editor that supports .graphqlconfig files

##Add Codegen


##Update to use .graphql files
in frontend folder:
in the .graphqlconfig file add the following to the object -> "documents": "src/**/*.document.graphql"

