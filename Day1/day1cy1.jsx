import React from 'react'
const Ch=() =>{
    const name1="Karan";
    const name2="Kabi";
    const object1={nam:"Kavi"};
    const object2={name:"Kabi"};
    const p1=(name1==object1);
    console.log(p1);
    const p2=(name2==object2);
    console.log(p2);
}
function Chalange(){
    return(
        <>
        <button onClick={Ch}>Onclick</button>
        </>
    )
}
export default Chalange;