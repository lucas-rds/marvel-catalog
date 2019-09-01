<template>
  <v-container fluid>
    <v-carousel
      hide-delimiter-background
      cycle
      show-arrows-on-hover
      height="600"
      v-if="comic.images.length"
    >
      <v-carousel-item
        v-for="(img, i) in comic.images"
        :key="i"
        :src="`${img.path}.${img.extension}`"
      ></v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12">
        <h1>{{ comic.title }}</h1>
        <h2>Autores: {{ creators }}</h2>
        <p>Descrição: {{ comic.description }}</p>
        <p>Número de páginas: {{ comic.pageCount }}</p>
        <p>Séries: {{ comic.series && comic.series.name }}</p>
        <p>UPC: {{ comic.upc }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import { Action } from "vuex-class";
import { IMarvelComic } from "../../models/MarvelComicResponse";
import CreatorsMixin from "../mixins/CreatorsMixin.vue";

@Component
export default class ComicFilter extends Mixins(CreatorsMixin) {
  @Action("fetchComicById", { namespace: "App" }) fetchComicById: any;

  private comic: IMarvelComic = { images: [] } as any;

  private get creators() {
    return this.creatorsToString(this.comic);
  }

  private async mounted() {
    try {
      this.comic = await this.fetchComicById(this.$route.params.comicId);
    } catch (error) {
      this.$router.push("/");
    }
  }
}
</script>
