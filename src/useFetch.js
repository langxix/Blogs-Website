import { useState ,  useEffect } from "react";

const useFetch = (url) => {
    const [ data, setData ] = useState(null); 
    const [isPending, setIsPending ] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data from the resourses');
            }
            return res.json();
        })
        .then(data => {
            setData(data)
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if(err.name === 'AbortController'){
                console.log('aborted');                
            }else{
                setError(err.catchmessage)
                setIsPending(false)
            }
            
            
        })

        return () => abortCont.abort();
       },[url]);
    
      return {data , isPending , error}     
}

export default useFetch;