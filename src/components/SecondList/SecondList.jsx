import { useEffect, useState } from "react";


const SecondList = (props) => {
    // console.log(props)
    const { moveValue , handleMovetoLeft , handleAllMovetoLeft} = props;
    console.log(moveValue);
    const [selectedValue, setSelectedValue] = useState([])
    const [movedData, setMovedData] = useState([])
    console.log("movedData == >", movedData)
    // console.log(movetoLeft)
    console.log(selectedValue)

    const handleSelectValue = (item) =>{
        if(selectedValue.includes(item)){
             setSelectedValue(selectedValue.filter((selected) => selected !== item))
        }
        
        else{
            
            setSelectedValue([item, ...selectedValue])
        }
    } 

   
       const handleLeftButton = () => {
        handleMovetoLeft(selectedValue);
        setSelectedValue([]);
        setMovedData(movedData.filter((value)=> !selectedValue.includes(value)))

       }
       const handleAllLeftButton = () =>{
        handleAllMovetoLeft(movedData)
        setMovedData([]);

       }

useEffect(()=>{
   setMovedData(moveValue)
}, [moveValue])

  
    return (
      <>
    <div className="d-flex">
      <div className="d-flex flex-column">
          <button className="btn btn-danger text-white  " onClick={handleLeftButton}>Move to Left</button>
          <button className="btn btn-primary text-white mt-3 " onClick={handleAllLeftButton}>Move All to Left</button>
        </div>

          <div>
        {movedData?.map((item, idx) => (
          <div className="d-flex mx-3 " key={idx}>
            <input className="mx-3"
              type="checkbox"
              value={item}
              onChange={() => handleSelectValue(item)}
              checked={selectedValue.includes(item)}

            />
            {item}
          </div>
        ))}
        </div>
        </div>

      </>
    );
  };
  
  export default SecondList;
  

