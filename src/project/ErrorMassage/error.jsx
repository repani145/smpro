import { data } from "../../Images/data";
import "./error.css"
const ErrorMessage=()=>{
   return(
<>
<img src={data.error1_404} alt="" className="error_image"/>
</>
   ) 
}
export default ErrorMessage;