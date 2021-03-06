import React from "react";
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};//

    return (
        <div>
            <li>{props.affair.name} {props.affair.priority} <button onClick={deleteCallback}>X</button>
            </li>
        </div>
    );
}

export default Affair;
