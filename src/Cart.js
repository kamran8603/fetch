// import React, { useState, useEffect } from 'react';

// function Cart() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/users');
//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <img src={user.image} alt={user.firstName} />
//             <div>
//               <h2>{`${user.firstName} ${user.lastName}`}</h2>
//               <p>Email: {user.email}</p>
//               <p>Phone: {user.phone}</p>
//               {/* Add more user details as needed */}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Cart;

import React, { useEffect, useState } from 'react'

function Cart() {
  const [value, setValue]= useState([])
  function abc(){
    fetch("https://dummyjson.com/users")
    .then((res)=>res.json())
    .then((resp)=>{
      setValue(resp.users)
      console.log(resp)
    })
  } 
  useEffect(()=>{
    abc()
  })
  return (
    <div>
      {
        value.map((item)=>(
          <div style={{border:"2px solid red", gap:"20px"}}>
            <img src={item.image} />
           
           <h3>{item.secondName}</h3>
           <h1>{item.secondName}</h1>
           <h2>{item.title}</h2>
           <h1>{item.eyeColor}</h1>
           <h1>{item.phone}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default Cart