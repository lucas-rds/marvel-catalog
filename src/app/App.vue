<template>
  <v-app :class="{ 'is-loading': loading }">
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Marvel</span>
        <span class="font-weight-light ml-2">Comics</span>
      </v-toolbar-title>
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        height="5"
        absolute
        bottom
        color="orange accent-4"
      ></v-progress-linear>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { State, Action, Getter } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @State("isLoading", { namespace: "App" }) loading!: boolean;
}
</script>
