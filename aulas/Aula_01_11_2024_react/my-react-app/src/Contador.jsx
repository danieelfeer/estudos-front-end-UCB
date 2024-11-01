import { useState } from "react";

function Contador() {
    const [contador, setContador] = useState(0);
    
    const incrementar = ()=>{
        setContador = contador+1;
    };

    return (  
        <>
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
        </div>
        </>
    );
}

export default Contador;