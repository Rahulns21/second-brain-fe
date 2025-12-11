import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedBrain from "./pages/SharedBrain";

function App() {
  return <BrowserRouter>
    <Toaster position="bottom-center" />

    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      <Route path="/brain/:shareLink" element={<SharedBrain />} />
    </Routes>
  </BrowserRouter>
}

export default App;