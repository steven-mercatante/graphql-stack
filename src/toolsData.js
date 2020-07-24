const Clojure = "Clojure";
const Elixir = "Elixir";
const Elm = "Elm";
const Go = "Go";
const Java = "Java";
const JavaScript = "JavaScript";
const ObjectiveC = "Objective-C";
const PHP = "PHP";
const Python = "Python";
const Ruby = "Ruby";
const Scala = "Scala";
const TypeScript = "TypeScript";
const iOS = "iOS";
const Android = "Android";

export default {
  client: {
    name: "Clients",
    description:
      "Client libraries construct queries and send them to the server. Some offer bindings for specific frontend libraries/frameworks (React, Vue, Angular, etc.), and others can be used independently of a framework.",
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
          "Universal React Query Library. urql is a GraphQL client, exposed as a set of ReactJS components. urql is specifically for React.",
        url: null,
        github: "https://github.com/FormidableLabs/urql",
        language: JavaScript
      },
      {
        name: "Micro GraphQL React",
        description:
          "Light and simple utility for adding GraphQL to React components. Executes queries via HTTP GET, allowing you to cache results via Service Worker, rather than potentially large client-side solutions.",
        url: null,
        github: "https://github.com/arackaf/micro-graphql-react",
        language: JavaScript
      },
      {
        name: "Grafoo",
        description:
          "Grafoo is a GraphQL client that tries to be different by adopting a simpler API, without giving up of a good caching strategy.",
        url: null,
        github: "https://github.com/grafoojs/grafoo",
        language: JavaScript
      },
      {
        name: "Relay",
        description:
          "Relay is a JavaScript framework for building data-driven React applications.",
        url: "https://facebook.github.io/relay/",
        github: "https://github.com/facebook/relay",
        language: JavaScript
      },
      {
        name: "GraphQL - Request",
        description:
          "Minimal GraphQL client supporting Node and browsers for scripts or simple apps.",
        url: null,
        github: "https://github.com/prismagraphql/graphql-request",
        language: JavaScript
      },
      {
        name: "Lokka",
        description:
          "Simple GraphQL client for JavaScript. Works on all the JavaScript environments including Browser, NodeJS and React Native.",
        url: null,
        github: "https://github.com/kadirahq/lokka",
        language: JavaScript
      },
      {
        name: "Nano GraphQL",
        description:
          "Tiny graphQL client library. Does everything you need with GraphQL 15 lines of code.",
        url: null,
        github: "https://github.com/yoshuawuyts/nanogql",
        language: JavaScript
      },
      {
        name: "Elm - GraphQL",
        description: "A GraphQL library for Elm, written entirely in Elm.",
        url:
          "http://package.elm-lang.org/packages/jamesmacaulay/elm-graphql/latest",
        github: "https://github.com/jamesmacaulay/elm-graphql",
        language: Elm
      },
      {
        name: "GraphQL iOS",
        description: "An Objective-C GraphQL client for iOS.",
        url: null,
        github: "https://github.com/funcompany/graphql-ios",
        language: ObjectiveC
      },
      {
        name: "gql",
        description:
          "This is a GraphQL client for Python. Plays nicely with graphene, graphql-core, graphql-js and any other GraphQL implementation compatible with the spec. GQL architecture is inspired by React-Relay and Apollo-Client.",
        url: null,
        github: "https://github.com/graphql-python/gql",
        language: Python
      },
      {
        name: "AWS AppSync Apollo Client",
        description:
          "JavaScript client for connecting to AWS AppSync GraphQL APIs. The client also includes support for offline operations.",
        url: null,
        github: "https://github.com/awslabs/aws-mobile-appsync-sdk-js",
        language: JavaScript
      },
      {
        name: "AWS Amplify",
        description:
          "JavaScript client for connecting GraphQL APIs. Supports queries, mutations, & subscriptions.",
        url: "https://aws.github.io/aws-amplify/",
        github: "https://github.com/aws/aws-amplify",
        language: JavaScript
      },
      {
        name: "AWS AppSync iOS Client",
        description:
          "The AWS AppSync SDK for iOS enables you to access your AWS AppSync backend and perform operations like Queries, Mutations, and Subscriptions. The SDK also includes support for offline operations.",
        url: null,
        github: "https://github.com/awslabs/aws-mobile-appsync-sdk-ios",
        language: iOS
      },
      {
        name: "AWS AppSync Android Client",
        description:
          "The AWS AppSync SDK for Android enables you to access your AWS AppSync backend and perform operations like Queries, Mutations, and Subscriptions. The SDK also includes support for offline operations.",
        url: null,
        github: "https://github.com/awslabs/aws-mobile-appsync-sdk-android",
        language: Android
      },
      {
        name: "Sailor",
        description: "A typesafe GraphQL client for PHP",
        url: null,
        github: "https://github.com/spawnia/sailor",
        language: PHP
      }
    ]
  },
  gateway: {
    name: "Gateways",
    description:
      "Gateways sit between the client and the server and offer functionality such as caching, monitoring, performance tracking and more.",
    tools: [
      {
        name: "Apollo Engine",
        description:
          "Apollo Engine is a GraphQL gateway that helps you implement and run GraphQL over REST or any other backend with confidence.",
        url: "https://www.apollographql.com/engine",
        github: "https://github.com/apollographql/apollo-engine-js",
        language: JavaScript
      },
      {
        name: "FastQL",
        description:
          "FastQL is a GraphQL CDN and API gateway. Improves performance by caching GraphQL API results at the edge and automatically invalidates stale caches.",
        url: "https://fastql.io",
        language: Go
      }
    ]
  },
  graphqlServer: {
    name: "GraphQL Servers",
    description:
      "These tools usually sit above a lower-level language specific framework (Express, Django, Laravel, etc.). They're responsible for receiving the query from the client, processing it, and sending back a response. They often times fetch the data from a database, but are not limited to one. In fact, they can query multiple databases or other web services/APIs.",
    tools: [
      {
        name: "Apollo Server",
        description: "GraphQL server for Express, Connect, Hapi, Koa and more.",
        url: "https://www.apollographql.com/server",
        github: "https://github.com/apollographql/apollo-server",
        language: JavaScript
      },
      {
        name: "Yoga",
        description:
          "Fully-featured GraphQL Server with focus on easy setup, performance & great developer experience.",
        url: null,
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
        name: "GraphQL - JS",
        description: "A reference implementation of GraphQL for JavaScript.",
        url: "https://graphql.org/graphql-js/",
        github: "https://github.com/graphql/graphql-js/",
        language: JavaScript
      },
      {
        name: "Express - GraphQL",
        description:
          "Create a GraphQL HTTP server with any HTTP web framework that supports connect styled middleware, including Connect itself, Express and Restify.",
        url: null,
        github: "https://github.com/graphql/express-graphql",
        language: JavaScript
      },
      {
        name: "Graphene - JS",
        description:
          "Graphene-JS is a JS framework for building GraphQL schemas/types fast and easily.",
        url: "http://graphene-js.org/",
        github: "https://github.com/graphql-js/graphene",
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
        description:
          "Graphene is a Python library for building GraphQL schemas/types fast and easily.",
        url: "http://graphene-python.org/",
        github: "https://github.com/graphql-python/graphene",
        language: Python
      },
      {
        name: "GraphQL - PHP",
        description: "A PHP port of the GraphQL reference implementation.",
        url: "http://webonyx.github.io/graphql-php/",
        github: "https://github.com/webonyx/graphql-php",
        language: PHP
      },
      {
        name: "GraphQL Relay - PHP",
        description:
          "A library to help construct a graphql-php server supporting react-relay.",
        url: null,
        github: "https://github.com/ivome/graphql-relay-php",
        language: PHP
      },
      {
        name: "Lighthouse - PHP",
        description: "GraphQL Server for Laravel.",
        url: "https://lighthouse-php.netlify.com/",
        github: "https://github.com/nuwave/lighthouse",
        language: PHP
      },
      {
        name: "GraphQL - Ruby",
        description: "Ruby implementation of GraphQL.",
        url: "http://graphql-ruby.org/",
        github: "https://github.com/rmosolgo/graphql-ruby",
        language: Ruby
      },
      {
        name: "Sangria",
        description: "Scala GraphQL implementation.",
        url: "https://sangria-graphql.org/",
        github: "https://github.com/sangria-graphql/sangria",
        language: Scala
      },
      {
        name: "Alumbra",
        description: "Simple & Elegant GraphQL for Clojure.",
        url: "https://alumbra.github.io/alumbra/",
        github: "https://github.com/alumbra/alumbra",
        language: Clojure
      },
      {
        name: "GraphQL - CLJ",
        description: "A Clojure library that provides GraphQL implementation.",
        url: null,
        github: "https://github.com/tendant/graphql-clj",
        language: Clojure
      },
      {
        name: "GraphQL - Go",
        description: "An implementation of GraphQL for Go / Golang.",
        url: null,
        github: "https://github.com/graphql-go/graphql",
        language: Go
      },
      {
        name: "Relay",
        description:
          "A Go / Golang library to help construct a graphql-go server supporting react-relay.",
        url: null,
        github: "https://github.com/graphql-go/relay",
        language: Go
      },
      {
        name: "GraphQL - Java",
        description: "GraphQL Java implementation.",
        url: null,
        github: "https://github.com/graphql-java/graphql-java",
        language: Java
      },
      {
        name: "AWS AppSync",
        description:
          "AWS AppSync is a managed & scalable GraphQL service. Features include out of the box offline functionality & access to multiple first-class data sources.",
        url: "https://aws.amazon.com/appsync/",
        github: "https://github.com/awslabs/aws-mobile-appsync-sdk-js",
        language: JavaScript
      },
      {
        name: "TypeGraphQL",
        description:
          "TypeGraphQL is a modern framework for building GraphQL APIs in Node.js. It allows creating the GraphQL schema and resolvers using only classes and decorators.",
        url: "https://19majkel94.github.io/type-graphql/",
        github: "https://github.com/19majkel94/type-graphql",
        language: TypeScript
      }
    ]
  },
  dbProxy: {
    name: "Database-to-GraphQL Servers",
    description:
      "These tools sit above one or more databases and translate between the database and GraphQL. Some can serve GraphQL clients directly, some might act like an ORM for a database. They typically offer boilerplate functionality (such as CRUD operations), and some expose more powerful database features.",
    tools: [
      {
        name: "Prisma",
        description:
          "Prisma is a performant open-source GraphQL ORM-like layer doing the heavy lifting in your GraphQL server. It turns your database into a GraphQL API which can be consumed by your resolvers via GraphQL bindings.",
        url: "https://www.prisma.io/",
        github: "https://github.com/prismagraphql/prisma"
      },
      {
        name: "PostGraphile",
        description:
          "Instant client-facing GraphQL server for your existing Postgres database, secured through Postgres' advanced access-control features. Highly customizable and extensible via SQL, Foreign Data Wrappers, and JS plugins.",
        url: "https://www.graphile.org/postgraphile/",
        github: "https://github.com/graphile/postgraphile"
      },
      {
        name: "Neo4j-GraphQL",
        description:
          "Neo4j-GraphQL is an integration for building GraphQL APIs using Neo4j Database. It translates GraphQL to Cypher for resolving data from Neo4j and enables the use of Cypher in the GraphQL schema definition.",
        url: "http://grandstack.io/docs/neo4j-graphql.html",
        github: "https://github.com/neo4j-graphql/neo4j-graphql"
      },
      {
        name: "Hasura",
        description:
          "Instant GraphQL APIs for existing or new Postgres databases, with dynamic row and column level access contols that can integrate with existing auth systems. Packs an admin UI and rails-like schema migrations.",
        url: "https://hasura.io",
        github: "https://github.com/hasura/graphql-engine"
      }
    ]
  }
};
