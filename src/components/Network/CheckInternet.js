import React from 'react' ; 

function CheckInternet(props){

    return <>
    
    {navigator.onLine  ? <>{props.children} </>: <div>اینترنت قطع شده است</div>}
    
    </>
}

export default CheckInternet ; 
