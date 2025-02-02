import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import AllItem from "./AllItem";
import NewItem from "./NewItem";
import UpdateItem from "./UpdateItem";
import DeleteItem from "./DeleteItem";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import UpdateForm from "./UpdateForm";
import { Route, Routes } from "react-router-dom";

function App(){
  return(
    <>
      <Menu/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizzeria" element={<Home/>} />
        <Route path="/pizzeria/about" element={<About/>}/>
        <Route path="/pizzeria/all-items" element={<AllItem/>}/>
        <Route path="/pizzeria/add-new-item" element={<NewItem/>}/>
        <Route path="/pizzeria/update-item" element={<UpdateItem/>}/>
        <Route path="/pizzeria/delete-item" element={<DeleteItem/>}/>
        <Route path="/pizzeria/contact-us" element={<ContactUs/>}/>
        <Route path="/pizzeria/update-form/:id" element={<UpdateForm/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App;
