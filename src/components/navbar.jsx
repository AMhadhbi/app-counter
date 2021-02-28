
const  Navbar = () => {
    return ( 
    <nav className="navbar navbar-light bg-light h3">
        <a href='#'>
            <img className ="rounded mr-2" src='images/me.png' alt=""
            style={{width: "40px", height: "40px"}}
            />
            Achraf Counter
            <span className="badge badge-pill badge-success ml-2">0</span>
        </a>
    </nav> 
    );
};
 
export default Navbar;


