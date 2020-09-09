import React from 'react'; 
import { Button } from "reactstrap";

function Submit(props) { 

    return <>  <div className="btn-container">
    <Button type="submit" className="form-button-login">
        {props.children}
    </Button>
  </div>
</>
}

export default Submit ; 