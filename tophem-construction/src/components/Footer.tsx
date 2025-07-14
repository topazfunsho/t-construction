

function Footer() {
  return (
    <>
    {/* footer section  */}
    <div className='bg-dark  text-white footer-section'>
            <div className='footer-section-logo'>
                <a href="/"><img src="https://iili.io/FYenpwP.png" alt="" /></a>
            
            </div>
            <div className='footer-nav'>
                <div className=''>
                    <h3>NAVIGATE</h3>
                    <ul style={{listStyle: 'none', display: "block",fontWeight: '700', lineHeight: '40px'}} className='fs-6'>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href="/"><li>Home</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href="/about"><li>About us</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href="/projects"><li>Civil engineering</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9',  }} href="/contact"><li>Contact</li></a>
                    </ul>
                </div>
                <div className=''>
                    <h3>COMPANY</h3>
                <ul style={{listStyle: 'none', display: "block",fontWeight: '700', lineHeight: '40px'}} className='fs-6'>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href="/blogs"><li>Blog</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href="/projects"><li>Projects</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href="/machinery"><li>Machinery</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9',  }} href="/staffs"><li>Staffs</li></a>
                    </ul>
                </div>
                <div className='' style={{width: '400px'}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate repellendus vitae vel ad et tempore, esse hic consectetur incidunt voluptas perspiciatis iure accusamus dicta ex cumque? Explicabo, accusantium placeat!</p>
                    <a href="#" target="_blank"><i className="bi-linkedin me-5 fs-1"></i></a>
                    <a href="#" target="_blank"><i className="bi-instagram fs-1"></i></a>
                </div>
            </div>
        </div>
        
        <div className='footer-footer'>
            <p>&copy;All Rights Reserved. date Tophem Constructions</p>
        </div>
    </>
  )
}

export default Footer