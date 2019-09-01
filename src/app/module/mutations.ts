import IAppState from "@/models/AppState";

export default {
  toggleLoading(state: IAppState, isLoading: boolean) {
    state.isLoading = isLoading;
  }
};
