// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoogleAuthProvider } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config";
// import { signInWithPopup } from "firebase/auth";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const auth = getAuth();
//   const googleProvider = new GoogleAuthProvider();

//   const handleLogin = () => {
//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         navigate("/"); // Navigate to the home interface
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         const email = error.customData.email;
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         console.error(errorMessage, email, credential);
//       });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Username:", username);
//     console.log("Password:", password);
//     // Implement username and password authentication here if needed
//     navigate("/"); // Navigate to the home interface after login
//   };

//   return (
//     <div
//       className="h-screen w-full flex flex-col items-center justify-center"
//       style={{
//         backgroundImage: "url(/images/background.jpg)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         {/* Logo and Welcome Message */}
//         <div className="flex items-center justify-center mb-6">
//           <img
//             src="/images/Group 3.png" // Add your logo path here
//             alt="Logo"
//             className="h-12 mr-2" // Adjust size of the logo
//           />
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800">
//               Welcome back!
//             </h3>
            
//           </div>
//         </div>

//         <form onSubmit={handleFormSubmit}>
//           <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="username">
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Enter your username"
//               className="w-full px-3 py-2 border rounded"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded mb-4"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-center text-gray-500 mb-4">OR</p>
//         <button
//           className="w-full bg-blue-600 text-white py-2 rounded"
//           onClick={handleLogin}
//         >
//           Login with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
