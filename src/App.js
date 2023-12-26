import {useState} from 'react'
import Dsp from './Dsp'
let App=()=>{
  let [data,setData]=useState({})
  let [lang,setLang]=useState([])
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let fun1=(e)=>{
    if(e.target.checked){
      setLang([...lang,e.target.value])
      console.log(lang)
    }
    else{
      lang.splice(lang.indexOf(e.target.value),1)
      setLang([...lang])
      console.log(lang)
    }
  }
  return(
    <div>
      <input type='text' name="name" onChange={fun}/>
    <div>

     <input type='radio' name='gen' onChange={fun} value="male"/>Male
     <input type='radio' name='gen' onChange={fun} value="female"/>Female

    </div>
    <div>
      <input type='checkbox' value="telegu" onChange={fun1}/>Telegu
      <input type='checkbox' value="hindi" onChange={fun1}/>Hindi
      <input type='checkbox' value="english" onChange={fun1}/>Telegu
    </div>
    <Dsp data={data} lang={lang}/>
    </div>

  )
}
export default App