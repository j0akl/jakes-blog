<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
  import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client'
  import {setClient} from 'svelte-apollo'

  const link = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include'
});

  const client = new ApolloClient({
    link,
    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    },
    cache: new InMemoryCache()
  })
  setClient(client)
</script>

<style  global>
  @import "../static/global.css";
</style>

<Router {routes} />