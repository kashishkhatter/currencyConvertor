import React,{useId} from "react";
//boxes for inputting currency types
function InputBox({
  label, /*from to*/
  amount, /*jo amt change krni*/
  onAmountChange, /*amount change krna pr ye state call*/
  onCurrencyChange, /*currency type change krna pr ye state call*/
  currencyOptions=[], /*to loop through all options from api*/
  selectCurrency="usd", /*by def usd m h*/
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId()

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>{/*jo bhi className choose kro usma ye css lgao*/ }
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount" /*enter amount*/
                  disabled={amountDisable}
                  value={amount} /*the value in input will be the amount*/
                  onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} /*on changing amt call onAmountChange fun()*/
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
             
              <select /*menu for choosing curr type*/
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency} /*on changing of currency type call onCuurencyChange fun*/
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}

                  >
              {/*now loop through all currency options through map*/}
              {currencyOptions.map((currency)=>(
                 <option key={currency} value={currency}> {/*whenever looping through jsx use key to improve performance*/}
                  {currency} {/*jo curr option choose kia h vhi val hogi*/}
                 </option>
              ))}
                  
              </select>
          </div>
      </div>
  );
}

export default InputBox;
