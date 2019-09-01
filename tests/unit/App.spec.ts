import { shallowMount } from "@vue/test-utils";
import App from "@/app/App.vue";
import { createVue } from "./LocalVue";

describe("App.vue", () => {
  let localVue: any;
  beforeEach(() => {
    localVue = createVue();
  });

  it("should render loading when isLoading true", () => {
    const wrapper = shallowMount(App, {
      computed: {
        loading: () => true
      },
      stubs: ["router-link", "router-view"],
      localVue
    });
    expect(wrapper.html()).toContain("is-loading");
  });

  it("shouldn't render loading when isLoading false", () => {
    const wrapper = shallowMount(App, {
      computed: {
        loading: () => false
      },
      stubs: ["router-link", "router-view"],
      localVue
    });
    expect(wrapper.html()).not.toContain("is-loading");
  });
});
