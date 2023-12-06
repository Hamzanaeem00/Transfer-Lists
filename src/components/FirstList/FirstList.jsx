import React, { useState } from 'react'
import SecondList from '../SecondList/SecondList';

const FirstList = () => {
    const [text, setText] = useState("");
  const [data, setdata] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  console.log("valueSelected=>", selectValue )
  const [moveValue, setMoveValue] = useState([]);
  console.log("moveValue==>", moveValue)

    const handleClick = (e) => {
        setText("")
        setdata([text, ...data]);
      }

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

      const handleMovetoLeft = (selectedItems)=>{
        console.log(selectedItems)
        if(data.includes(selectedItems)){
        //    setMoveValue(selectedItems)
        setdata(selectedItems)
        }else{
            // setMoveValue([...moveValue, ...selectedItems]);
            setdata([...data , ...selectedItems])
        }
        setMoveValue(moveValue.filter((selected)=> !selectedItems.includes(selected)))
      }

      const handleAllMovetoRight = ()=>{
          setMoveValue(data)
          setdata([])
      }
      const handleAllMovetoLeft = (allData) =>{
        console.log(allData)
        setdata(allData)
      }
  return (
    <>
    <main className='main'>
        <div className='main-container'>
        <div className=' mb-5 d-flex justify-content-center input-group'>
            <input class="input-group__input" type="text" placeholder="&nbsp;"  autocomplete="off" required  value={text}
            onChange={(e) => setText(e.target.value)} />
                            <label class="input-group__label" for="Add List">Add List</label>
            <button className='btn btn-primary mt-2' onClick={handleClick}>Add</button>
        </div>

        <div className='d-flex justify-content-around'>
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
      ): ("") 
}

<>
            <div className='d-flex flex-column fixed-buttons '>
                <button className='btn btn-warning text-white' onClick={handleMovetoRight}>Move to Right</button>
                <button className='btn btn-success text-white mt-3' onClick={handleAllMovetoRight}>Move  All to Right</button>

               
            </div>  
            <div>
            <SecondList moveValue={moveValue} handleMovetoLeft={handleMovetoLeft} handleAllMovetoLeft={handleAllMovetoLeft} />
            </div>
  </>
        </div>
        </div>
    </main>
    </>
  )
}

export default FirstList
