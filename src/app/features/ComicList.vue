<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="comic of comics" :key="comic.id" :cols="colsByViewPort">
        <ComicCard :comic="comic" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import { IMarvelComic } from "@/models/MarvelComicResponse";
import ComicCard from "./ComicCard.vue";

@Component({
  components: {
    ComicCard
  }
})
export default class ComicList extends Vue {
  @Prop() private comics!: IMarvelComic[];

  private get colsByViewPort() {
    switch (this.$vuetify.breakpoint.name) {
      case "xs":
        return "12";
      default:
        return "6";
    }
  }
}
</script>
