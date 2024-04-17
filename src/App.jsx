
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/index'
function App() {
  const routesDataIncludedNavbaShow = [
    { path: "/", component: Home },
  ];
  return (
    <>
     <Routes>

      {routesDataIncludedNavbaShow.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
     </Routes>
    </>
  )
}

export default App
