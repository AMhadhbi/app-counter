
const  Navbar = () => {
    return ( 
    <nav className="navbar navbar-light bg-light h3">
        <a href='#'>
            <img className ="rounded" src='images/me.png' alt=""
            style={{width: "40px", height: "40px"}}
            />
            Achraf Counter
            <span className="badge badge-pill badge-success">0</span>
        </a>
    </nav> 
    );
};
 
export default Navbar;


