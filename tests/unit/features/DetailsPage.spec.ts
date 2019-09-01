import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import DetailsPage from "@/app/features/DetailsPage.vue";
import { createVue } from "../LocalVue";

describe("DetailsPage.vue", () => {
  let localVue: any;
  let actions: any;
  let store: any;
  beforeEach(() => {
    localVue = createVue();

    const fetchComicById = jest.fn();
    fetchComicById.mockReturnValue({
      title: "aaa",
      description: "bbb",
      pageCount: 999,
      series: { name: "ccc" },
      upc: 888,
      images: []
    });
    actions = { fetchComicById };

    store = new Vuex.Store({
      modules: {
        App: {
          namespaced: true,
          actions
        }
      }
    });
  });

  it("should render comic details", async () => {
    const wrapper = shallowMount(DetailsPage, {
      localVue,
      store,
      mocks: {
        $route: {
          params: {
            comicId: 1
          }
        }
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain("aaa");
    expect(wrapper.html()).toContain("bbb");
    expect(wrapper.html()).toContain("ccc");
    expect(wrapper.html()).toContain("888");
    expect(wrapper.html()).toContain("999");
  });
});
