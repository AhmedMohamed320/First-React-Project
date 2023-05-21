import "./App.css";
import Header from "./components/Layout/header/Header";
import Nav from "./components/Layout/nav/Nav";
import About from "./components/Layout/about/About";
import Services from "./components/Layout/services/Services";
import Cars from "./components/Layout/cars/Cars";
import SomeCars from "./components/Layout/someCars/SomeCars";
import Brands from "./components/Layout/brands/Brands";
import Testimonials from "./components/Layout/Testimonials/Testimonials";
import ContactUs from "./components/Layout/contactUs/ContactUs";
import CartProvider from "./store/CartProvider";
function App() {
    return (
        <CartProvider>
            <Nav></Nav>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Cars></Cars>
            <SomeCars></SomeCars>
            <Testimonials></Testimonials>
            <Brands></Brands>
            <ContactUs></ContactUs>
        </CartProvider>
    );
}

export default App;
