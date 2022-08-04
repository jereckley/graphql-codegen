import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Animal = {
  face?: Maybe<Face>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Bird = Animal & {
  __typename?: 'Bird';
  face?: Maybe<Face>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Face = {
  __typename?: 'Face';
  eyeballs: Scalars['Int'];
  noseDescription?: Maybe<Scalars['String']>;
};

export type Monkey = Animal & {
  __typename?: 'Monkey';
  face?: Maybe<Face>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  animals?: Maybe<Array<Maybe<Animal>>>;
  getAnimalById?: Maybe<Animal>;
};


export type QueryGetAnimalByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Get_AnimalsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_AnimalsQuery = { __typename?: 'Query', animals?: Array<{ __typename: 'Bird', id: string, name: string, image: string, type: string, face?: { __typename?: 'Face', noseDescription?: string | null, eyeballs: number } | null } | { __typename: 'Monkey', id: string, name: string, image: string, type: string, face?: { __typename?: 'Face', noseDescription?: string | null, eyeballs: number } | null } | null> | null };


export const Get_AnimalsDocument = gql`
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

/**
 * __useGet_AnimalsQuery__
 *
 * To run a query within a React component, call `useGet_AnimalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_AnimalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_AnimalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_AnimalsQuery(baseOptions?: Apollo.QueryHookOptions<Get_AnimalsQuery, Get_AnimalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_AnimalsQuery, Get_AnimalsQueryVariables>(Get_AnimalsDocument, options);
      }
export function useGet_AnimalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_AnimalsQuery, Get_AnimalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_AnimalsQuery, Get_AnimalsQueryVariables>(Get_AnimalsDocument, options);
        }
export type Get_AnimalsQueryHookResult = ReturnType<typeof useGet_AnimalsQuery>;
export type Get_AnimalsLazyQueryHookResult = ReturnType<typeof useGet_AnimalsLazyQuery>;
export type Get_AnimalsQueryResult = Apollo.QueryResult<Get_AnimalsQuery, Get_AnimalsQueryVariables>;