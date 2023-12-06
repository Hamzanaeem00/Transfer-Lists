import React, { useState } from "react";
import SecondList from "../SecondList/SecondList";

const FirstList = () => {
  const [text, setText] = useState("");
  const [data, setdata] = useState([]);
//   console.log(data)
  const [selectValue, setSelectValue] = useState([]);
  console.log("valueSelected=>", selectValue )
  const [moveValue, setMoveValue] = useState([]);
  console.log("moveValue==>", moveValue)

  const handleClick = (e) => {
    setText("")
    setdata([text, ...data]);
  };

  const handleSelectedValue = (item) =>{
   console.log( item)
   if(selectValue.includes(item)){
    setSelectValue(selectValue.filter((value)=> value === item  ))
}else{
       setSelectValue([item , ...selectValue])
   }
  }

  const handleMovetoRight = () => {
    setMoveValue([...moveValue , ...selectValue]);
       const remainingData =  data.filter((item)=> !selectValue.includes(item))
    setdata(remainingData)
    // console.log(data)
    setSelectValue([])
  };
  const handleMovetoLeft = (selectedItems) => {
    console.log(selectedItems)
    if(data.includes(selectedItems)){
    //    setMoveValue(selectedItems)
    setdata(selectedItems)
    }else{
        // setMoveValue([...moveValue, ...selectedItems]);
        setdata([...data , ...selectedItems])
    }
    setMoveValue(moveValue.filter((selected)=> !selectedItems.includes(selected)))


  };


  return (
    <>
    <div className="w-100 d-flex">
    <div className="w-50" >
      <div className="d-flex">
        <div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add Text"
          />
        </div>
        <div>
          <button onClick={handleClick}>Add</button>
        </div>

        <div className="mx-5">
          <button onClick={handleMovetoRight}>Move to right</button>
        </div>
        
      </div>
      {data.length>0? (
        <div>
      {data?.map((item, idx) => {
        return (
          <>
          
            <div key={idx}>
              <div>
                {" "}
                <input
                  type="checkbox"
                  value={item}
                onChange={() => handleSelectedValue(item)}
                checked={selectValue.includes(item)}
                />{" "}
                {item}
              </div>
            </div>
          </>
        );
      })}
      </div>
      ): ("") }
    </div>
    <div className="w-50">
          <SecondList  moveValue={moveValue} handleMovetoLeft={handleMovetoLeft} />
        </div>
</div>
</>
  );
};

export default FirstList;   

