import { shallowMount } from "@vue/test-utils";
import ComicList from "@/app/features/ComicList.vue";
import { createVue } from "../LocalVue";
import Vuetify from "vuetify";

describe("ComicList.vue", () => {
  let localVue: any;
  let vuetify: any;
  beforeEach(() => {
    localVue = createVue();
    vuetify = new Vuetify();
  });

  it("should render items passed in props", () => {
    const wrapper = shallowMount(ComicList, {
      localVue,
      vuetify,
      propsData: {
        comics: [
          {
            title: "nice title",
            thumbnail: {
              path: "abc",
              extension: "jpg"
            },
            creators: { items: [{ name: "steveJobs" }] }
          },
          {
            title: "nice title2",
            thumbnail: {
              path: "abc2",
              extension: "jpg"
            },
            creators: { items: [{ name: "steveJobs2" }] }
          }
        ]
      }
    });
    const vm = wrapper.vm as any;

    expect(vm.colsByViewPort).toEqual("6");
    expect(wrapper.findAll("comiccard-stub").length).toEqual(2);
  });
});
