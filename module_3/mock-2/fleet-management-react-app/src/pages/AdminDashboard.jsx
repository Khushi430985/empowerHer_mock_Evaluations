import { useState,useCallback } from "react";
import FleetCard from "../components/FleetCard";

const AdminDashboard=()=>{
    const [fleet,setFleet]=
    useState([]);
    const [form,setForm]=useState({
        regNo: "",
        category:"",
        driver:"",
        available:"Available",
    });
    const addFleet=() =>{
        if(!form.regNo || !form.category ||!form.driver){
            alert("All fields required");
            return;
        }
        setFleet([...fleet,{ ...form,id:Date.now() }]);

        setForm({
            regNo: "",
            category:"",
            driver:"",
            available:"Available",
        });
    };

    const updateDriver=
    useCallback((id,newDriver )=> {
        if(!newDriver.trim()) return;
        setFleet((prev)=>
        prev.map((f)=>
        f.id===id?{ ...f,driver:newDriver}:f)
    );
    }, []);

    const toggleAvailability=
    useCallback((id)=>{
        setFleet((prev)=>
        prev.map((f)=>
        f.id === id ? {
            ...f.available==="Available" ? "Unavailable":"Available",
        } :f
        )
    );
    }, []);

    const deleteFleet =useCallback((id)=>{
        if(window.confirm("Are you sure")){
            setFleet((prev)=>
            prev.filter((f)=>f.id !== id));
        }
    }, []);

    return(
        <div>
            <h2>Admin Dashboard</h2>

            {/* Sidebar Form*/}
            <input
            placeholder="Vehicle Reg No"
            value={form.regNo}
            onChange={(e)=>
                setForm({ ...form,regNo:e.target.value})
            } />
            <select
            value={form.category}
            onChange={(e)=>
                setForm({ ...form, category:e.target.value})
            } >
                <option value="">Select Category</option>
                <option>Auto</option>
                <option>Car</option>
                <option>Truck</option>
                <option>Bus</option>

            </select>

            <input
            placeholder="Driver Name"
            value={form.driver}
            onChange={(e)=>
                setForm({ ...form,driver:e.target.value})
            } />

            <button onClick={addFleet}>Add Fleet</button>

            {/* Fleet Cards */}
            <div style ={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px"}}>
                {fleet.map((item)=>{
                    <FleetCard
                    key={item.id}
                    data={item}
                    onUpdate={updateDriver}
                    onToggle={toggleAvailability}
                    onDelete={deleteFleet}
                    />
                })}
            </div>
        </div>
    );
};
export default AdminDashboard;