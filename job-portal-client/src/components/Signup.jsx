// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();
//   const auth = getAuth();

//   useEffect(() => {
//     if (auth.currentUser) {
//       navigate("/"); // Redirect signed-in users to home
//     }
//   }, [auth, navigate]);

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("User created:", user);
//         navigate("/"); // Navigate to home after signup
//       })
//       .catch((error) => {
//         console.error("Error during signup:", error.message);
//         alert(error.message);
//       });
//   };

//   const handleLoginRedirect = () => {
//     navigate("/login"); // Navigate to login page
//   };

//   return (
//     <div
//       className="h-screen w-full flex items-center justify-center"
//       style={{
//         backgroundImage: "url(/images/background.jpg)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <div className="flex items-center justify-center mb-6">
//           <img src="/images/Group 3.png" alt="Logo" className="h-12 mr-2" />
//           <h3 className="text-xl font-semibold text-gray-800">Get Started!</h3>
//         </div>
//         <form onSubmit={handleSignup}>
//           <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-3 py-2 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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
//               className="w-full px-3 py-2 border rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 mb-2"
//               htmlFor="confirmPassword"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="w-full px-3 py-2 border rounded"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded"
//           >
//             Signup
//           </button>
//         </form>

//         {/* Login Redirect Section */}
//         <div className="mt-4 text-center">
//           <p className="text-gray-600">
//             Already have an account?{" "}
//             <button
//               className="text-blue-600 font-semibold underline"
//               onClick={handleLoginRedirect}
//             >
//               Login here
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
