//   // СПОСОБ ПЕРВЫЙ 1
// ___________________________________________________________________________________

// import { useState } from "react";
// export const Form = () => {
//   const [firstInput, setFirstInput] = useState("");
//   const [secondInput, setSecondInput] = useState("");
//   const [thirdInput, setThirdInput] = useState("");
//   const changeInputValues = (e) => {
//     setFirstInput(e.target.value);
//   };
//   const changeInputValuesTwo = (e) => {
//     setSecondInput(e.target.value);
//   };
//   const changeInputValuesThree = (e) => {
//     setThirdInput(e.target.value);
//   };
//   const pushValuesInputs = () => {
//     const data = {
//       first: firstInput,
//       second: secondInput,
//       third: secondInput,
//     };
//     setFirstInput("");
//     setSecondInput("");
//     setThirdInput("");
//     console.log(data);

//   };
//   return (
//     <div>
//       <input type="text" value={firstInput} onChange={changeInputValues} />
//       <input type="text" value={secondInput} onChange={changeInputValuesTwo} />
//       <input type="text" value={thirdInput} onChange={changeInputValuesThree} />
//       <button onClick={pushValuesInputs}>Add</button>
//     </div>
//   );
// };

//____________________________________________________________________________________________________

// СПОСОБ ВТОРОЙ 2

//____________________________________________________________________________________________________
// import { useState } from "react";

// export function Form() {
//   const [firstInput, setFirstInput] = useState({
//     first: "",
//     second: "",
//     third: "",
//   });
//   const changeSetInputs = (key) => {
//     const keys = firstInput[key];
//     console.log(keys);

//     return (e) => {
//       setFirstInput((prevState) => {
//         return {
//           ...prevState,
//           [key]: e.target.value,
//         };
//       });
//     };
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={firstInput.first}
//         onChange={changeSetInputs("first")}
//       />
//       <input
//         type="text"
//         value={firstInput.second}
//         onChange={changeSetInputs("second")}
//       />
//       <input
//         type="text"
//         value={firstInput.third}
//         onChange={changeSetInputs("third")}
//       />
//     </div>
//   );
// }

//_____________________________________________________________________________________

//  СПОСОБ ТРЕТИЙ 3

// ____________________________________________________________________________________

import React, { useState } from "react";

export function Form() {
  const [state, setState] = useState({
    first: "",
    second: "",
    third: "",
  });
  const changeStateValuesFirst = (el) => {
    setState((prev) => ({ ...prev, first: el.target.value }));
  };
  const changeStateValuesSecond = (el) => {
    setState((prev) => ({ ...prev, second: el.target.value }));
  };
  const changeStateValuesThird = (el) => {
    setState((prev) => ({ ...prev, third: el.target.value }));
  };
  const setValuesInputs = () => {
    const valuesInputs = {
      firstInput: state.first,
      secondInput: state.second,
      thirdInput: state.third,
    };
    console.log(valuesInputs);
    setState({ first: "", second: "", third: "" });
  };
  return (
    <div>
      <input
        type="text"
        name="first"
        value={state.first}
        onChange={changeStateValuesFirst}
      />

      <input
        type="text"
        name="second"
        value={state.second}
        onChange={changeStateValuesSecond}
      />
      <input
        type="text"
        name="third"
        value={state.third}
        onChange={changeStateValuesThird}
      />
      <button onClick={setValuesInputs}>add</button>
    </div>
  );
}
