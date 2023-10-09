import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.NEXT_GRAPHQL}`,
  cache: new InMemoryCache(),
});
