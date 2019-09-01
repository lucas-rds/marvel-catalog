import Vuex from "vuex";
import { shallowMount } from "@vue/test-utils";
import ComicCard from "@/app/features/ComicCard.vue";
import { createVue } from "../LocalVue";

describe("ComicCard.vue", () => {
  let localVue: any;

  beforeEach(() => {
    localVue = createVue();
  });

  it("should redirect on button click", () => {
    const routerPush = jest.fn();
    const wrapper = shallowMount(ComicCard, {
      localVue,
      propsData: {
        comic: {
          title: "nice title",
          thumbnail: {
            path: "abc",
            extension: "jpg"
          },
          creators: { items: [{ name: "steveJobs" }] }
        }
      },
      mocks: {
        $router: {
          push: routerPush
        }
      },
      stubs: ["router-link", "router-view"]
    });
    const vm = wrapper.vm as any;

    expect(wrapper.html()).toContain("nice title");
    expect(wrapper.html()).toContain("Autores: steveJobs");
    expect(wrapper.html()).toContain('src="abc.jpg"');

    vm.goToDetails(3);
    expect(routerPush).toHaveBeenCalledWith({
      name: "details",
      params: { comicId: 3 }
    });
  });
});
