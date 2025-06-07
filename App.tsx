
import React, { useState } from "react";

import { Routes, Route } from 'react-router-dom';
import LoginPage from "./components/layouts/LoginPage";
import SignUpPage from "./components/layouts/SignUpPage";
import Topbar from "./components/layouts/Topbar";
import Sidebar from "./components/layouts/Sidebar";



// function MyButton() {
//   return (
//     <button className="bg-amber-600 text-white px-4 py-2 rounded mt-4">
//       I'm a button
//     </button>
//   );
// }

// export default function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Topbar (fixed height, e.g., 64px) */}
//       <div className="h-16">
//         <Topbar onBrandClick={() => setIsSidebarOpen(true)} />
//       </div>

//       {/* Main content area below Topbar */}
//       <div className="flex flex-1">
//         {/* Sidebar shifts content instead of overlaying */}
//         {isSidebarOpen && (
//           <Sidebar onClose={() => setIsSidebarOpen(false)} />
//         )}

//         {/* Main Content */}
//         <div className="flex-1 p-6 bg-gray-100 overflow-auto">
//           <h1 className="text-3xl font-bold mb-4">Welcome to my app</h1>
//           <MyButton />
//         </div>
//       </div>
//     </div>
//   );
// }


// src/App.tsx

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SignUpPage />} />
      <Route path="*" element={<h2>404 Not Found</h2>} />
    </Routes>
  );
};
export default App;
