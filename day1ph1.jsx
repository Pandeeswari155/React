import Reac from "react"
function Consol()
{
    let names="Kiran";
    let age=25;
    let setStatus="false";
    console.log(names);
        console.log(age);
        console.log(setStatus);
        let oldage=age;
        age=10;
        let status=setStatus;
        setStatus=true;
        console.log(status,setStatus);
        alert("Click on button");
        return(
            <>
            <button onClick={Consol}>Click</button>
            </>
    )
};
export default Consol;
