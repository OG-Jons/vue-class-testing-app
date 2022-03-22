import { mount, VueWrapper } from "@vue/test-utils";
import CounterButtons from "../../src/components/CounterButtons.vue";

test("CounterButtons is mounted", async () => {
  const wrapper: VueWrapper = mount(CounterButtons);
  expect(CounterButtons).toBeTruthy();

  expect(wrapper.text()).toContain("0");
  expect(wrapper.html()).toMatchSnapshot();
});

test("increments", async () => {
  const wrapper: VueWrapper = mount(CounterButtons);

  await wrapper.get("#increment").trigger("click");

  expect(wrapper.text()).toContain("1");
});

test("decrements", async () => {
  const wrapper: VueWrapper = mount(CounterButtons);

  await wrapper.get("#decrement").trigger("click");

  expect(wrapper.text()).toContain("-1");
});
