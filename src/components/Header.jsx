import Sidebar from "./Sidebar";
// indkøbskurven (Cart, setcart) bliver sat ind under sidebar
export default function Header({cart, setCart}) {
    return( 
          <nav className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Clothing shop
              </a>
              <Sidebar 
              cart={cart}
              setCart={setCart}/> 
            </div>
          </nav>
    )
}