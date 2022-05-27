const isValidRequestBody = function (value) {
    return Object.keys(value).length > 0
  }
  const validString = function(value) {
    if (typeof value === 'string' && value.trim().length === 0) return false //it checks whether the string contain only space or not 
    return true;
}

//for product
const validInstallment = function (value) {
if (value <= 0) return false
if (value % 1 == 0) return true;
}

const isValidIncludes=function(value,requestBody){
    return Object.keys(requestBody).includes(value)
} 


//validaton check for the type of Value --
const isValid = (value) => {
    if (typeof value == 'undefined' || value == null) return false;
    if (typeof value == 'string' && value.trim().length == 0) return false;
    if (typeof value === 'number'&&value.toString().trim().length===0) return false;
    return true
  }

 module.exports={isValid,isValidIncludes,validInstallment,validString,isValidRequestBody} 



  