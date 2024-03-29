import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { userResolvers, userTypeDefs } from "./schemas/user.js";
import { productResolvers, productTypeDefs } from "./schemas/product.js";
import { mongoConnect } from "./config/mongoConnection.js";
import { authentication } from "./middlewares/auth.js";
import {
  productOrderResolvers,
  productOrderTypeDefs,
} from "./schemas/order.js";
import { pickupOrderResolvers, pickupOrderTypeDefs } from "./schemas/waste.js";
import { locationResolvers, locationTypeDefs } from "./schemas/location.js";

// !! When compiling don't forget to add .js extension to each imported variables from 'created folders'!

const server = new ApolloServer({
  typeDefs: [
    userTypeDefs,
    productTypeDefs,
    productOrderTypeDefs,
    pickupOrderTypeDefs,
    locationTypeDefs,
  ],
  resolvers: [
    userResolvers,
    productResolvers,
    productOrderResolvers,
    pickupOrderResolvers,
    locationResolvers,
  ],
  introspection: true,
});

(async () => {
  await mongoConnect();
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT) || 4000 },
    context: async ({ req, res }) => {
      // await mongoConnect(); // Jangan di pindah ini disini aja
      return {
        authentication: () => authentication(req),
      };
    },
  });

  console.log(`🚀 Server ready at ${url}`);
})();
