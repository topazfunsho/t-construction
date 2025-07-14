import { useRef } from "react";

function NavBar() {

    const mobileDiv = useRef<HTMLDivElement | null>(null);
        
    function handleMobileNav() {
        if (mobileDiv.current) mobileDiv.current.style.display = 'flex';
        
      }
      function handleClose() {
        if (mobileDiv.current) mobileDiv.current.style.display = 'none';
        
      }  
        
    
  return (
    <>
        {/* pre nav section  */}
        <div className="px-5 justify-content-between bg-primary text-white fs-6 pre-nav sm:hidden">
            <div className="col-4">
                Welcome to Tophem Construction
            </div>
            <div className="">
                <div className="flex">
                    <i className="bi-envelope"> construction@tophem.com</i>
                </div>
            </div>
            <div className=" ">
                <a href="#" target="_blank"><i className="bi-linkedin me-2"></i></a>
                <a href="#" target="_blank"><i className="bi-instagram"></i></a>
            </div>
        </div>
        {/* navbar section  */}
        <div className='justify-content-between align-items-center nav-section' style={{backgroundColor: 'whitesmoke'}}>
            <div className='logo'>
                <a href="/"><img src="https://iili.io/FYenpwP.png" alt="" /></a>
            </div>

            <div className='navigate'>
                <ul className='fs-5'>
                    <a href="/about"><li>About us</li></a>
                    <a href="/services"><li>Services</li></a>
                    <a href="/projects"><li>Projects</li></a>
                    <a href="/contact"><li>Contact</li></a>
                </ul>
            </div>
            <div className="pre-nav">
                <i className="bi bi-telephone"></i>
                <h3>+2348033784778</h3>
            </div>
            <div className='mobile-menu' onClick={handleMobileNav}>
                <i className="bi bi-list"></i>
            </div>
            <div className="mobile-nav" ref={mobileDiv}>
                
                    <ul className='fs-5'>
                        <a href="/"><li>Home</li></a>
                        <a href="/about"><li>About us</li></a>
                        <a href="/services"><li>Services</li></a>
                        <a href="/projects"><li>Projects</li></a>
                        <a href="/contact"><li>Contact</li></a>
                    </ul>
                    <i className="bi bi-x-lg me-3" onClick={handleClose}></i>
                
            </div>
        </div>
    </>
  )
}

export default NavBar