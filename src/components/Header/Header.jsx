import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {

  return(

    <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">

  <Link className="header-title" to="/"> 
  <i class="ri-pantone-line"></i> EDUCATION SAAS
          </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor:"lightgrey"}}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{backgroundColor:"white"}} >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"30%"}}>
        <li class="nav-item" style={{marginTop:"7%"}}>
        <Link className="header-subtitle" aria-current="page" to="/" >
                  Home
                </Link>        </li>
        <li class="nav-item" style={{marginTop:"7.2%"}}>
        <Link className="header-subtitle" to="/about">
                  About
                </Link>
        </li>
        <li class="nav-item dropdown" style={{marginTop:"5.5%", fontSize:"120%", marginRight:"4%"}}>
          
              <Link className="nav-link dropdown-toggle" to="/courses" id="navbarDropdown" role="button" data-bs-toggle="dropdown" ria-expanded="false" style={{color:"black"}}>
                  Courses
                </Link>
          
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <ul>
              <li> <Link className="dropdown-item" to="/preschool">
                  Pre School
                </Link></li>
              <li> <Link className="dropdown-item" to="/primary">
                  Primary
                </Link></li>
              <li> <Link className="dropdown-item" to="/firststd">
                  1st Std
                </Link></li>
              <li> <Link className="dropdown-item" to="/secondstd">
                  2nd Std
                </Link></li>
              <li><Link className="dropdown-item" to="/thirdstd">
                  3rd Std
                </Link></li>
            </ul>
            <ul>
              <li><Link className="dropdown-item" to="/fourthstd">
                  4th Std
                </Link></li>
              <li><Link className="dropdown-item" to="/fifthstd">
                  5th Std
                </Link></li>
              <li><Link className="dropdown-item" to="/sixthstd">
                  6th Std
                </Link></li>
              <li><Link className="dropdown-item" to="/seventhstd">
                  7th Std
                </Link></li>
                <li><Link className="dropdown-item" to="/eighthstd">
                  8th Std
                </Link></li> 
            </ul>
            <ul>
              <li><Link className="dropdown-item" to="/ninethstd">
                  9th Std
                </Link></li>
              <li><Link className="dropdown-item" to="/tenthstd">
                  10th Std
                </Link></li>
              <li><Link className="dropdown-item" to="/eleventhstd">
                  11th Std
                </Link></li>
              <li><Link className="dropdown-item" to="/twelvethstd">
                12th Std
                </Link></li>
              <li><Link className="dropdown-item" to="/bachelor">
                  Bachelor
                </Link></li>
            </ul>
          </div>
        </li>

        <li class="nav-item dropdown" style={{marginTop:"5.5%", fontSize:"120%", marginRight:"4%"}}>
          
          <Link className="nav-link dropdown-toggle" to="/courses" id="navbarDropdown" role="button" data-bs-toggle="dropdown" ria-expanded="false" style={{color:"black"}}>
              Exams
            </Link>
      
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <ul>
          <li > <Link className="dropdown-item" to="/entrance" style={{color:"black"}}>
              Entrance
            </Link></li>
         
        </ul>
        <ul>
          <li ><Link className="dropdown-item" to="/main" style={{color:"black"}}>
              Main
            </Link></li>
         
        </ul>
        <ul>
          <li><Link className="dropdown-item" to="/common" style={{color:"black"}}>
              Common
            </Link></li>
         
        </ul>
      </div>
    </li>

    
        <li className="nav-item" style={{marginTop:"7.3%", fontSize:"120%", marginRight:"3%"}}>
        <Link className="dropdown-item" to="/testimonials">
                  Testimonial
                </Link>
        </li>
      </ul>
      <div className="d-flex align-items-center" style={{marginTop:"3%"}}>
              <Link to="/contact" className=" elementor-button " role="button">

                <span>
                  Get in Touch
                </span>

              </Link>
              </div>
    </div>
  </div>
</nav>
  );

}

export default Header;





// import React, { useRef } from "react";
// import { Container } from "reactstrap";
// import "./header.css";

// const navLinks = [
//   {
//     display: "Home",
//     url: "#",
//   },
//   {
//     display: "About",
//     url: "/about",
//   },

//   {
//     display: "Courses",
//     url: "",
//   },
//   {
//     display: "Pages",
//     url: "#",
//   },
//   {
//     display: "Blog",
//     url: "#",
//   },
// ];

// const Header = () => {
//   const menuRef = useRef();

//   const menuToggle = () => menuRef.current.classList.toggle("active__menu");

//   return (
//     <header className="header">
//       <Container>
//         <div className="navigation d-flex align-items-center justify-content-between">
//           <div className="logo">
//             <h2 className=" d-flex align-items-center gap-1">
//               <i class="ri-pantone-line"></i> Learners.
//             </h2>
//           </div>

//           <div className="nav d-flex align-items-center gap-5">
//             <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
//               <ul className="nav__list">
//                 {navLinks.map((item, index) => (
//                   <li key={index} className="nav__item">
//                     <a href={item.url}>{item.display}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="nav__right">
//               <p className="mb-0 d-flex align-items-center gap-2">
//                 <i class="ri-phone-line"></i> +88 0123456789
//               </p>
//             </div>
//           </div>

//           <div className="mobile__menu">
//             <span>
//               <i class="ri-menu-line" onClick={menuToggle}></i>
//             </span>
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };

// export default Header;