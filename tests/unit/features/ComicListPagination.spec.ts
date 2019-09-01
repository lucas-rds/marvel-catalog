import { shallowMount } from "@vue/test-utils";
import ComicListPagination from "@/app/features/ComicListPagination.vue";
import { createVue } from "../LocalVue";
import Vuetify from "vuetify";

describe("ComicListPagination.vue", () => {
  let localVue: any;
  beforeEach(() => {
    localVue = createVue();
  });

  it("should calc correctly", () => {
    const wrapper = shallowMount(ComicListPagination, {
      localVue,
      propsData: {
        total: 100,
        perPage: 20
      }
    });
    const vm = wrapper.vm as any;

    expect(vm.pages).toEqual(5);
    vm.emit();
    expect(wrapper.emitted().input[0]).toEqual([1]);
    expect(wrapper.emitted().change[0]).toEqual([{ offset: 0, page: 1 }]);
  });
});
