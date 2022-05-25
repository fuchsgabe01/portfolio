//const init = {
//  hello : [],
//  newline : []
//}

const projFilterReducer = (state = "all", action) => {
  switch (action.type) {
    case "setAll":
      return (state = "all");
    case "setCAD":
      return (state = "cad");
    case "setMechE":
      return (state = "meche");
    case "setSoft":
      return (state = "soft");
    default:
      return state;
  }
};

export default projFilterReducer;

//<h1>counter: {counter}</h1>
//      <button onClick={() => dispatch({ type: "INCREMENT" })}>up:</button>
//     <button onClick={() => dispatch({ type: "decrement" })}>down:</button>
