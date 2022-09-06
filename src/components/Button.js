import React, {useState} from 'react'
import Box from './Box';



function Button() {
    const [boxList, setBoxList] = useState([]);

    const onButtonClick = event => {
        setBoxList(boxList.concat(<div><Box /></div>));
    };


    return (
        <div>
            <button className="btn" onClick={onButtonClick}>Add Box</button>
            <div className="box_outter">
                {boxList}
            </div>
          
        </div>
    )
}

export default Button
