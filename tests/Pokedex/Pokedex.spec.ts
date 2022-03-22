import { mount, VueWrapper } from "@vue/test-utils";
import Pokedex from "../../src/components/Pokedex.vue";

test("Pokedex is mounted", async () => {
  expect(Pokedex).toBeTruthy();
  const wrapper: VueWrapper = mount(Pokedex);

  expect(wrapper.html()).toMatchSnapshot();
});

test("Valid pokemon search", async () => {
  const wrapper: VueWrapper = mount(Pokedex);
  const input = wrapper.get("input");
  await input.setValue("bulbasaur");
  await input.trigger("keyup.enter");

  console.log(wrapper.text());
});

test.todo("Invalid pokemon search");
