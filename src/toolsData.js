const Elixir = "Elixir";
const JavaScript = "JavaScript";
const Python = "Python";

export default {
  client: {
    name: "Clients",
    description:
      "Client libraries construct queries and send them to the server. They're available for almost every popular frontend framework (React, Vue, Angular, Ember, etc.)",
    tools: [
      {
        name: "Apollo Client",
        description:
          "A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.",
        url: "https://www.apollographql.com/client/",
        github: "https://github.com/apollographql/apollo-client",
        language: JavaScript
      },
      {
        name: "urql",
        description:
          "urql is a GraphQL client, exposed as a set of ReactJS components.",
        url: "",
        github: "https://github.com/FormidableLabs/urql",
        language: JavaScript
      },
      {
        name: "micro graphql react",
        description:
          "Light and simple utility for adding GraphQL to React components. Executes queries via HTTP GET, allowing you to cache results via Service Worker, rather than potentially large client-side solutions.",
        url: "",
        github: "https://github.com/arackaf/micro-graphql-react",
        language: JavaScript
      },
      {
        name: "Grafoo",
        description:
          "Grafoo is a GraphQL client that tries to be different by adopting a simpler API, without giving up of a good caching strategy.",
        url: "",
        github: "https://github.com/grafoojs/grafoo",
        language: JavaScript
      }
    ]
  },
  gateway: {
    name: "Gateways",
    description:
      "Gateways sit between the client and the server and offer functionality such as caching and monitoring.",
    tools: [
      {
        name: "Apollo Engine",
        description: "Apollo Engine middleware for Node",
        url: "https://www.apollographql.com/engine",
        github: "https://github.com/apollographql/apollo-engine-js",
        language: JavaScript
      }
    ]
  },
  graphqlServer: {
    name: "GraphQL Servers",
    description:
      "These frameworks usually sit above a lower-level language specific framework (e.g Express, Django, Laravel, etc.). They're responsible for receiving the query from the client, processing it, and sending back a response. They often times fetch the data from a database, but are not limited to one. In fact, they can query multiple databases, files and other webservices/APIs.",
    tools: [
      {
        name: "Apollo Server",
        description: "GraphQL server for Express, Connect, Hapi, Koa and more.",
        url: "https://www.apollographql.com/engine",
        github: "https://github.com/apollographql/apollo-server",
        language: JavaScript
      },
      {
        name: "Yoga",
        description:
          "Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience.",
        url: "",
        github: "https://github.com/prismagraphql/graphql-yoga",
        language: JavaScript
      },
      {
        name: "Graphcool",
        description:
          "Open-source and self-hosted backend-as-a-service to develop serverless GraphQL backends. The Graphcool Framework offers an opionated backend setup, including GraphQL database mapping, subscriptions & permission system.",
        url: "https://www.graph.cool/",
        github: "https://github.com/prismagraphql/graphcool-framework",
        language: JavaScript
      },
      {
        name: "Absinthe",
        description: "The GraphQL toolkit for Elixir.",
        url: "http://absinthe-graphql.org/",
        github: "https://github.com/absinthe-graphql/absinthe",
        language: Elixir
      },
      {
        name: "Graphene - Python",
        description: "GraphQL framework for Python.",
        url: "http://graphene-python.org/",
        github: "https://github.com/graphql-python/graphene",
        language: Python
      }
    ]
  },
  // server: {
  //   name: "Server",
  //   description:
  //     "These frameworks are language-specific and are usually the ones responsible for fetching data.",
  //   tools: [
  //     {
  //       name: "Express",
  //       description: "",
  //       url: "https://expressjs.com/",
  //       github: "https://github.com/expressjs/expressjs.com",
  //       language: JavaScript
  //     }
  //   ]
  // },
  dbProxy: {
    name: "Database Proxies",
    description:
      "A database proxy sits right above the database [TODO: need better description]",
    tools: [
      {
        name: "Prisma",
        description:
          "Prisma is a performant open-source GraphQL ORM-like layer doing the heavy lifting in your GraphQL server. It turns your database into a GraphQL API which can be consumed by your resolvers via GraphQL bindings.",
        url: "https://www.prisma.io/",
        github: "https://github.com/prismagraphql/prisma",
        language: JavaScript
      }
    ]
  }
};
