import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


// //App is a component
// function App() {
//   return (
//     //using a <>fragment tag allow us to have more div in return
//     <> 
      
//       <Text display="Whats up"/>
//       <Text display="hello"/>

//     </>
//   )
// }

// //Another component
// function Text({display}){
//   return (
//     <div>
//       <p>{display}</p>
//     </div>
//   );
// }

// export default App

import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
