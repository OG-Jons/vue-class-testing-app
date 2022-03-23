import { mount, VueWrapper } from "@vue/test-utils";
import Pokedex from "../../src/components/Pokedex.vue";
import { expect, vi } from "vitest";
import { testPokemon } from "../setup.vitest";
import axios from "axios";
import { nextTick } from "vue";

describe("Pokedex", () => {
  expect(Pokedex).toBeTruthy();
  const spy = vi.spyOn(axios, "get");
  const wrapper: VueWrapper = mount(Pokedex);

  it("should mount", async () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should search a valid pokemon", async () => {
    spy.mockResolvedValueOnce({
      data: testPokemon,
    });

    const input = wrapper.get("input");
    const button = wrapper.get("button");

    await input.setValue("bulbasaur");
    await button.trigger("submit");

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/bulbasaur");

    await nextTick();

    expect(wrapper.text()).toContain("Bulbasaur");
    expect(wrapper.html()).toContain(testPokemon.sprites.front_default);
  });

  it("should show error on invalid pokemon", async () => {
    spy.mockRejectedValueOnce({
      response: {
        status: 404,
      },
    });

    const input = wrapper.get("input");
    const button = wrapper.get("button");

    await input.setValue("invalid");
    await button.trigger("submit");

    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/invalid");

    await nextTick();

    expect(wrapper.text()).toContain("searching...");

    await nextTick();

    expect(wrapper.text()).toContain("Pokemon not found");
    expect(wrapper.html()).toContain("https://via.placeholder.com/150");

    spy.mockClear();
  });
});
