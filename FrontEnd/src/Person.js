import React, { useState } from "react";
import axios from "axios";


export default function Person() {
    let [name, setName] = useState();
    let [age, setAge] = useState();
    let [gender, setGender] = useState();



    let handleSubmit = async (e) => {

        e.preventDefault();

        let person = {
            "name": e.target.name.value,
            "age": e.target.age.value,
            "gender": e.target.gender.value,
        }


        setName(e.target.name.value)
        setGender(e.target.gender.value)

        // http://localhost:4000/person
        // https://express-odat.herokuapp.com/
        
        let response = await axios.post(`https://express-odat.herokuapp.com/person`, person)
        setAge(response.data.age)
        console.log(response.data.age, 'response')
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label> Name: </label>
                <input type='text' data-testid="name" name="name" />
                <label> Age: </label>
                <input type='number' data-testid="age" name="age" />
                <label>Gender:</label>
                <select type='text' data-testid="gender" name="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button type="submit" data-testid="button"> Submit </button>

            </form>

            <div>

                <h2 data-testid="renderedData">{name}</h2>
                <h2> {age} </h2>
                <h2> {gender} </h2>


            </div>


        </div>
    )
}