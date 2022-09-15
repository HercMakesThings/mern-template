import {useEffect, useState} from 'react'

const TemplateTest = () => {
    
    let [testMsg, setTestMsg] = useState();
    //establishing simple connection to backend express server
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACKEND_ROOT}/testConnect`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res=>res.json())
        .then(res=>{
            // testMsg=res.body
            setTestMsg(res.body)
            return console.log(res.body)
        })
        .catch(res=>setTestMsg('Error! Connection to server not made!'));
    },[]);

    return ( 
        <div className="container">
            <p>{testMsg ? testMsg : 'loading...'}</p>
        </div>
     );
}
 
export default TemplateTest;