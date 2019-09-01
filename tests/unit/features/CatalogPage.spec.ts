import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import CatalogPage from "@/app/features/CatalogPage.vue";
import { createVue } from "../LocalVue";

describe("CatalogPage.vue", () => {
  let localVue: any;
  let actions: any;
  let store: any;

  beforeEach(() => {
    localVue = createVue();

    const fetchComics = jest.fn();
    fetchComics
      .mockReturnValueOnce({ data: [] })
      .mockReturnValueOnce({ data: [1] })
      .mockReturnValueOnce({ data: [2] })
      .mockReturnValue({ data: [3] });
    actions = { fetchComics };

    store = new Vuex.Store({
      modules: {
        App: {
          namespaced: true,
          actions
        }
      }
    });
  });

  it("should filter correctly and update local state", async () => {
    const wrapper = await shallowMount(CatalogPage, { store, localVue });
    const vm = wrapper.vm as any;
    await vm.filter();
    expect(vm.comicsWithPagination).toEqual([1]);
    expect(vm.filters).toEqual({ limit: 10, nameStartsWith: "", offset: 0 });

    vm.inputSearch();
    await vm.$nextTick();
    expect(vm.comicsWithPagination).toEqual([2]);

    vm.paginationChanged({ offset: 20 });
    await vm.$nextTick();
    expect(vm.comicsWithPagination).toEqual([3]);
    expect(vm.filters).toEqual({ limit: 10, nameStartsWith: "", offset: 20 });
  });
});
