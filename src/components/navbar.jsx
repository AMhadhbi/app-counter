
const  Navbar = () => {
    return ( 
    <nav className="navbar navbar-light bg-light h3">
        <span>
            <img className ="mr-2" src='images/me.png' alt=""
            style={{width: "40px", height: "40px", borderRadius :"40%"}}
            />
            Achraf Counter
            <span className="badge badge-pill badge-success ml-2">0</span>
        </span>
    </nav> 
    );
};
 
export default Navbar;


