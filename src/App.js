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
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(){
  return(
    <>
    {/* <Router basename="/pizzeria"> */}
      <Menu/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizzeria" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/all-items" element={<AllItem/>}/>
        <Route path="/add-new-item" element={<NewItem/>}/>
        <Route path="/update-item" element={<UpdateItem/>}/>
        <Route path="/delete-item" element={<DeleteItem/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/update-form/:id" element={<UpdateForm/>}/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>

      <Footer/>
    {/* </Router> */}
    </>
  )
}

export default App;
