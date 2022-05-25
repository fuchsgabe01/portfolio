//const init = {
//  hello : [],
//  newline : []
//}

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

//<h1>counter: {counter}</h1>
//      <button onClick={() => dispatch({ type: "INCREMENT" })}>up:</button>
//     <button onClick={() => dispatch({ type: "decrement" })}>down:</button>
