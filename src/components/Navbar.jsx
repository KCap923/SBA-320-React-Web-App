
const Navbar = () => {
  return (

    // Navbar ****************************************************************
<nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ethereal Essence </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> Login </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"> Skin Care </a></li>
            <li><a className="dropdown-item" href="#"> Makeup </a></li>
            <li><a className="dropdown-item" href="#"> Bath & Body </a></li>
            <li><a className="dropdown-item" href="#"> Tools & Brushes </a></li>
            <li><a className="dropdown-item" href="#"> Fragrance </a></li>
            <li><a className="dropdown-item" href="#"> Beauty Under $10 </a></li>

          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <button  type="submit" className="btn btn-warning"> Search </button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
