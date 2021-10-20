import React from 'react'

const Navbar = ({ filterItem, menuList }) => { 
    return (
       <>
        <nav className="navbar">
        <div className="btngroup  ">
            
                {menuList.map((curElem)  => {
                    return(
                        <button 
                        className="btn-groop__item" 
                        onClick={() => filterItem(curElem)}>{curElem}</button>
            
                    );
             })}
             </div>
         </nav>
     </>
);
};
        
    

export default Navbar
