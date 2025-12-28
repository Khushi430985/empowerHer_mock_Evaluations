import React from "react";
const FleetCard =({ data,onUpdate,onToggle,onDelete})=>{
    return(
        <div style={{border:"1px solid gray", padding:"10px"}}>
            <p>Reg No: {data.regNo}</p>
            <p>Category: {data.category}</p>
            <p>Driver: {data.driver}</p>
            <p>Status: {data.available}</p>

            <button
            onClick={()=>{
                const name=prompt("Enter new driver name");
                if(name) onUpdate(data.id,name);
            }}>
                Update Driver
            </button>

            <button onClick={()=>onToggle(data.id)}>
                Toggle Availabilty
            </button>

            <button onClick={()=>onDelete(data.id)}>
                Delete
            </button>
        </div>
    );
};

export default React.memo(FleetCard);