const Elixir = "elixir";
const JavaScript = "javascript";
const Python = "python";

export default {
  client: {
    description: "",
    tools: [
      {
        name: "Apollo Client",
        description: "",
        url: "https://www.apollographql.com/client/",
        github: "https://github.com/apollographql/apollo-client",
        language: JavaScript
      },
      {
        name: "urql",
        description: "",
        url: "",
        github: "https://github.com/FormidableLabs/urql",
        language: JavaScript
      },
      {
        name: "micro graphql react",
        description: "",
        url: "",
        github: "https://github.com/arackaf/micro-graphql-react",
        language: JavaScript
      }
    ]
  },
  gateway: {
    description: "",
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
    description: "",
    tools: [
      {
        name: "Apollo Server",
        description: "GraphQL server for Express, Connect, Hapi, Koa and more",
        url: "https://www.apollographql.com/engine",
        github: "https://github.com/apollographql/apollo-server",
        language: JavaScript
      },
      {
        name: "Yoga",
        description:
          "Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience",
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
        description: "The GraphQL toolkit for Elixir",
        url: "http://absinthe-graphql.org/",
        github: "https://github.com/absinthe-graphql/absinthe",
        language: Elixir
      },
      {
        name: "Graphene - Python",
        description: "GraphQL framework for Python",
        url: "http://graphene-python.org/",
        github: "https://github.com/graphql-python/graphene",
        language: Python
      }
    ]
  },
  server: {
    description: "",
    tools: [
      {
        name: "Express",
        description: "",
        url: "https://expressjs.com/",
        github: "https://github.com/expressjs/expressjs.com",
        language: JavaScript
      }
    ]
  },
  dbProxy: {
    description: "",
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
