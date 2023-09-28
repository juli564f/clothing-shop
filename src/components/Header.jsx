import Sidebar from "./Sidebar";



export default function Header(props) {
    return( 
          <nav className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Clothing shop
              </a>
              <Sidebar /> 
            </div>
          </nav>
    )
}