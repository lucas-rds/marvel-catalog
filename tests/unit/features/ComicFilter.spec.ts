import { shallowMount } from "@vue/test-utils";
import ComicFilter from "@/app/features/ComicFilter.vue";
import { createVue } from "../LocalVue";

describe("ComicFilter.vue", () => {
  let localVue: any;

  beforeEach(() => {
    localVue = createVue();
  });

  it("should emit filter on change", () => {
    const wrapper = shallowMount(ComicFilter, {
      localVue,
      propsData: {
        value: "searchParam"
      }
    });
    const vm = wrapper.vm as any;

    expect(wrapper.html()).toContain("Procurar");

    vm.search();
    expect(wrapper.emitted().search).toBeTruthy();
    expect(wrapper.emitted().search.length).toBe(1);
    expect(wrapper.emitted().search[0]).toEqual(["searchParam"]);
  });
});
