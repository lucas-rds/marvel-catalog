<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import { IMarvelComic } from "@/models/MarvelComicResponse";

@Component
export default class CreatorsMixin extends Vue {
  protected creatorsToString(comic: IMarvelComic) {
    return (
      comic &&
      comic.creators &&
      comic.creators.items.map((item: any) => item.name).join(", ")
    );
  }
}
</script>

<template>
  <span></span>
</template>
