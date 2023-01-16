import './header.css'

const Header=(props)=>{
return(
<div className="header">
        <span >X:{props.X}</span>
        <span >O: {props.O}</span>
        <span >Now  its "{props.turn}" turn</span>
    </div>

);

};

export default Header;