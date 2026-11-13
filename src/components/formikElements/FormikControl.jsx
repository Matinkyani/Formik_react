import Checkbox from "./Checkbox";
import Date from "./Date";
import File from "./File";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";

const FormikContorol =(props)=>{
    switch (props.control) {
        case "input":
            return <Input {...props}/>
        case "textarea":
            return <TextArea {...props}/>
    
        case "select":
            return <Select {...props}/>
    
        case "radio":
            return <Radio {...props}/>
        case "checkbox":
            return <Checkbox {...props}/>
        case "date":
            return <Date {...props}/>
        case "file":
            return <File {...props}/>
    
        default:
            break;
    }
}
export default FormikContorol;