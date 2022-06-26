import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from "./Header";

const Home = ()=>(<h1>Arjun</h1>)
const Checkout = ()=>(<h1>Checkout</h1>)
const Login = ()=>(<h1>Login</h1>)



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
