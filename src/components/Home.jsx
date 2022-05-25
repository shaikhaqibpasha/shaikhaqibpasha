import React from "react";
import "./Home.css";
import { Productitem } from "./Productitem";
import { Empitem } from "./Empitem";
import { AllEmp } from "./AllEmp";
export const Home = () => {
    return (
        <div className="home">
            <div className="proditem">
                <Productitem />
            </div>
            <div className="proditem" >
                <Empitem />
            </div>
            <div className="proditem">
                <AllEmp />
            </div>
        </div>
    )

}