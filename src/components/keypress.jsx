import '../App.css';

function Buttons({Click,Clear,Equal,BackSpace}){
    let values = ["7", "8", "9", "+", "4", "5", "6", "-","1", "2", "3", "*", "(",  ")", "0", "/", "."]
    return(
    <>
        {values.map((x,i)=>(<input type="button" value={x}  key={i} className="button" onClick={(e)=>(Click(e.target.value))} />))}
        <input type="button" value="ce" className="button" onClick={()=>(Clear())}/>
        <input type="button" value="=" className="button"  onClick={()=>Equal()}/>
        <input type="button" value="back" className="button"  onClick={()=>BackSpace()}/>
    </>
)
}

export default Buttons