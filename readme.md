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

npm run update-schema

create a new file name .graphqlconfig and add:
{
  "name": "animals graph",
  "schema": ["schema.graphql"],
  "documents": "src/**/*.document.graphql"
}

install any graphql plugin for your editor that supports .graphqlconfig files

##Add Codegen
in frontend folder:
npm install @graphql-codegen/cli

npx graphql-code-generator init

select: (Default) Application built with react
enter: schema.graphql
enter: src/**/*.document.graphql
select: (Default plugins)
enter: (Default output)
enter: n (not to generate introspection)
enter: (Default name)
enter: codegen (command to run)

npm install

create a file called `app.document.graphql` in the `src` folder
copy the contents of the gql'' tag into the app.document.graphql

npm run codegen

in App.tsx import new document `import {Get_AnimalsDocument} from "./generated/graphql";`

delete the GET_ANIMALS const and update the usage to use imported document

##Use Types
in frontend folder:
add the import import { Get_AnimalsDocument, useGet_AnimalsQuery } from "./generated/graphql";
replace useQuery(...) with useGet_AnimalsQuery()

remove the any types... so (animal: any) (animal)

fix the typing issues

##See Fullstack Coolness
in backend folder:
index.js line 9 change eyeballs to ears

add this code around line 79

const animalsWithEars = animals.map((animal) => {
	return {
		...animal,
		face: {
			noseDescription: animal.face.noseDescription,
			ears: animal.face.eyeballs
		}
	}
})

update the resolver to user animalsWithEars instead of animals

in the frontend:
npm run update-schema
npm run codegen

notice codegen informs you or issues in your queries

fix your query

npm run codegen

open App.tsx and notice you have errors... code won't compile

fix typescript issue
