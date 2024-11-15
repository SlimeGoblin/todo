
import { format, parse} from "date-fns"
//format date
function todaysDate(dateInput){
if(dateInput !== ''){
    const dateFormat = "yyyy-MM-dd"
    const parsedData = parse(dateInput, dateFormat, new Date())
    var newParsed = new Date(parsedData)
    const extraFried = format((newParsed), 'MM/dd/yyyy')
    return(`Due: ${extraFried}`)
}
else{
    return ''
}
}

export{todaysDate}