//custom hook
import {useEffect,useState} from "react"
// just like useEffect,useState make our custom hook useCurrencyInfo using existing hooks to use in App.jsx file

function useCurrencyInfo(currency){
 const[data,setData]=useState({}) //data/value fetched
 useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    //jis bhi currency ko choose krege api us vali currency ka conversion rates ka lia khul jayegi
    .then((res)=>res.json()) //api fetch string format m krti h so jo res aya convert it to json
    .then((res)=>setData(res[currency])) //res ma jo currency puchi h us key pr value fetch
},[currency])//dependency on currency

return data;
}

export default useCurrencyInfo; //to use it in App.jsx file