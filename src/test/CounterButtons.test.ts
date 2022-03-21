// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import CounterButtons from "../components/CounterButtons.vue";

test("CounterButtons component is mounted", async () => {
  const wrapper = mount(CounterButtons);
  expect(CounterButtons).toBeTruthy();

  expect(wrapper.text()).toContain("0");
  expect(wrapper.html()).toMatchSnapshot();
});

test("CounterButton increments", async () => {
  const wrapper = mount(CounterButtons);
  await wrapper.get("#increment").trigger("click");

  expect(wrapper.text()).toContain("1");
});

test("CounterButton decrements", async () => {
  const wrapper = mount(CounterButtons);
  await wrapper.get("#decrement").trigger("click");

  expect(wrapper.text()).toContain("-1");
});
