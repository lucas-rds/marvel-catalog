<template>
  <div class="comic-card">
    <v-card
      class="mx-auto"
      :outlined="false"
      :elevation="undefined"
      :raised="true"
      :height="600"
    >
      <v-img
        class="white--text"
        height="400px"
        :src="`${comic.thumbnail.path}.${comic.thumbnail.extension}`"
      >
        <v-card-title>{{ comic.title }}</v-card-title>
      </v-img>
      <v-card-text>Autores: {{ creators }}</v-card-text>
      <v-card-actions>
        <v-btn outlined @click="goToDetails(comic.id)" id="goTodetails"
          >Saiba mais</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import { IMarvelComic } from "@/models/MarvelComicResponse";
import CreatorsMixin from "../mixins/CreatorsMixin.vue";

@Component
export default class ComicCard extends Mixins(CreatorsMixin) {
  @Prop() private comic!: IMarvelComic;

  private goToDetails(comicId: string) {
    this.$router.push({ name: "details", params: { comicId } });
  }

  private get creators() {
    return this.creatorsToString(this.comic);
  }
}
</script>

<style lang="scss">
.comic-card {
  .v-card__title {
    text-shadow: 2px 2px #000;
  }
  .v-card__text {
    background: #333333;
    height: 150px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
