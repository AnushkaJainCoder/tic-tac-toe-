import { useState } from "react";

export default function Square({value}){

    // const [value, setValue] = useState(null);

    // function handleClick(){
    //     setValue('X')
    //     console.log('clicked');
    // }
    return (
        <>
            <button className="square" >
                {value}
            </button>
        
        </>
    )
}