<template>
  <div class="catalog">
    <ComicFilter @search="inputSearch" v-model="filters.nameStartsWith" />
    <ComicList :comics="comicsWithPagination.results" />
    <ComicListPagination
      :limit="filters.limit"
      :offset="filters.offset"
      :total="comicsWithPagination.total"
      v-model="page"
      @change="paginationChanged"
    />
  </div>
</template>

<script lang="ts">
import { Action } from "vuex-class";
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import ComicFilter from "./ComicFilter.vue";
import ComicList from "./ComicList.vue";
import ComicListPagination from "./ComicListPagination.vue";
import { IMarvelApiComicResponse } from "@/models/MarvelComicResponse";

@Component({
  components: {
    ComicFilter,
    ComicList,
    ComicListPagination
  }
})
export default class CatalogPage extends Vue {
  @Action("fetchComics", { namespace: "App" }) fetchComics: any;

  private filters = {
    nameStartsWith: "",
    limit: 10,
    offset: 0
  };
  private page = 1;

  private comicsWithPagination: IMarvelApiComicResponse = {} as any;

  private async filter() {
    const filtered = await this.fetchComics(this.filters);
    this.comicsWithPagination = filtered.data;
  }

  private paginationChanged({ page, offset }: any) {
    this.filters = { ...this.filters, offset };
    this.filter();
  }

  private inputSearch() {
    this.filter();
  }

  private mounted() {
    this.filter();
  }
}
</script>
