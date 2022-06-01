const init = {
  showing: false,
  project: "",
};

const extraInfoReducer = (state = init, action) => {
  switch (action.type) {
    case "toggleOnAndUpdate":
      return { ...state, showing: true, project: action.payload };
    case "toggleOff":
      return { ...state, showing: false };
    default:
      return state;
  }
};

export default extraInfoReducer;

//<h1>counter: {counter}</h1>
//      <button onClick={() => dispatch({ type: "INCREMENT" })}>up:</button>
//     <button onClick={() => dispatch({ type: "decrement" })}>down:</button>
