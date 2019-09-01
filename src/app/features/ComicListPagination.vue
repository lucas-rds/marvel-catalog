<template>
  <v-container fluid class="comic-list-pagination">
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="pages"
        :total-visible="7"
        @input="emit"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";

@Component
export default class ComicListPagination extends Vue {
  @Prop({ default: 1 }) private value!: number;
  @Prop({ default: 10 }) private perPage!: number;
  @Prop({ default: 0 }) private limit!: number;
  @Prop({ default: 0 }) private offset!: number;
  @Prop({ default: 0 }) private total!: number;
  @Prop({ default: 7 }) private totalVisible!: number;

  private page = this.value;

  private emit() {
    const offset = (this.page - 1) * this.limit;
    this.$emit("input", this.page);
    this.$emit("change", { page: this.page, offset });
  }

  private get pages() {
    return Math.ceil(this.total / this.perPage);
  }
}
</script>
