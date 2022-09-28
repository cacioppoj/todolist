import React, {Fragment, useState} from "react"

const CheckBox = (props) =>{
    const {
        onChange,
        data: {id,description,done}
    } = props;

    return(
        //<div className="checkbox">
         //   
        //</div>
        <Fragment>
            <label className="todo-newitem">
                <input
                    className = "todo__state"
                    name ={id}
                    type="checkbox"
                    defaultChecked={done}
                    onChange = {onChange}
                />
                <div className="todo__text">{description}</div>
            </label>
        </Fragment>
    );

}

export default CheckBox