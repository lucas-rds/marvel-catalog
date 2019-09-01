import { shallowMount } from "@vue/test-utils";
import Mixin from "@/app/mixins/CreatorsMixin.vue";
import { createVue } from "../LocalVue";

describe("CreatorsMixin.vue", () => {
  let localVue: any;
  beforeEach(() => {
    localVue = createVue();
  });

  it("should generate creators list", () => {
    const wrapper = shallowMount(Mixin, { localVue, methods: {} });
    const vm = wrapper.vm as any;
    expect(vm.creatorsToString(null)).toBe(null);
    expect(() => vm.creatorsToString({ creators: {} })).toThrow();
    expect(vm.creatorsToString({ creators: { items: [] } })).toBe("");
    expect(
      vm.creatorsToString({
        creators: { items: [{ name: "a" }, { name: "b" }] }
      })
    ).toBe("a, b");
  });
});
