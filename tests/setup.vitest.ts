import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";

export const testPokemon = {
  name: "bulbasaur",
  sprites: {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
};

export const restHandlers = [
  rest.get("https://pokeapi.co/api/v2/pokemon/bulbasaur", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testPokemon));
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/invalid", (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
