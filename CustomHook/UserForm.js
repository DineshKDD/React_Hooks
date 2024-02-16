// import React, { useState } from "react";

// function UserForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const handleClick = (e) => {
//     e.preventDefault();
//     alert(`${firstName} and ${lastName}`);
//   };

//   return (
//     <div>
//       <form onSubmit={handleClick}>
//         <div>
//           <label>firstName</label>
//           <input
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           ></input>
//         </div>

//         <div>
//           <label>lastName</label>
//           <input
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           ></input>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default UserForm;

import React from "react";
import useCustomHookForm from "./CustomHookForm";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useCustomHookForm("");
  const [lastName, bindLastName, resetLastName] = useCustomHookForm("");

  const handleClick = (e) => {
    e.preventDefault();
    alert(`${firstName} and ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <input {...bindFirstName} type="text"></input>
        </div>
        <div>
          <input {...bindLastName} type="text"></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default UserForm;
