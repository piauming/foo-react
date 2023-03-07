import produce from "immer";

const setScrollTo = (state, payload) => {
    draftState.data["scrollTo"] = payload;
    return;
}

export default setScrollTo;