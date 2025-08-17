import './App.css';
import { OnChange } from './components/domEvent/OnChange';
import { Onclick } from './components/domEvent/Onclick';
import { OnSubmit } from './components/domEvent/OnSubmit';
import { Todo } from './components/Todo/Todo';
import { UseEffect } from './components/AllUse/UseEffect';
import { Home } from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router"
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Layout } from "./layout";
import { AboutUs } from './pages/aboutUs';
import { AboutHistory } from './pages/aboutHistory';
import { Product } from './pages/products';
import { ProductDetail } from './pages/productDetail';
import { ProductList } from './pages/productList';
// import { Home } from './pages/home';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />}>
              <Route index element={<AboutUs/>}/>
              <Route path="us" element={<AboutUs />} />
              <Route path='history' element={<AboutHistory/>}/>
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path='product' element={<Product/>}>
              <Route index element={<ProductList/>}/>
              <Route path=':id' element={<ProductDetail/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Onclick/> */}
      {/* <OnChange/> */}
      {/* <OnSubmit/> */}
      {/* <Todo/> */}
      {/* <UseEffect/> */}
    </>
  )
}

export default App
