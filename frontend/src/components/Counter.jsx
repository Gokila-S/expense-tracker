import {useState,useEffect} from 'react'; 
const Counter = () => {
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)

    useEffect(()=>{
        console.log('effect')
    } )
    console.log("rendering...");
    const increment1 = () => {
        setCount1(count1+1);
    }
    const increment2 = () => {
        setCount2(count2+1);
    }
    return(
        <div>
            <h2>Counter</h2>
            <h3>Count1: {count1}</h3>
            <h3>Count2: {count2}</h3>
            <button className="increment" onClick={increment1}>Increment 1</button>
            <button className="increment" onClick={increment2}>Increment 2</button>
        </div>
    )
}
export default Counter;