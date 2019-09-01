<template>
  <v-container fluid>
    <v-row>
      <v-col md="6" xs="12">
        <v-text-field
          v-model="characterName"
          label="Busque pelo seu personagem favorito"
          @input="$emit('input', characterName)"
          @keyup.enter="search"
        >
          <v-btn slot="append" @click="search">Procurar</v-btn>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from "vue-property-decorator";
import ComicCard from "./ComicCard.vue";

@Component
export default class ComicFilter extends Vue {
  @Prop() value!: string;
  private characterName: string = this.value;
  private async search() {
    this.$emit("search", this.characterName);
  }
}
</script>
