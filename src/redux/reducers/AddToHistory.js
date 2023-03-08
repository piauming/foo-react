import produce from "immer";

const addToHistory = (state, payload) => {
    console.log("addToHistory", payload.value);
    return produce(state, draftState => {
            draftState.history.push(payload?.value);
    });
}

export default addToHistory;