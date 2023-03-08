import produce from "immer";

const setScrollTo = (state, payload) => {
    return produce(state, draftState => {
        draftState.data["scrollTo"] = payload?.title;
    });
}

export default setScrollTo;