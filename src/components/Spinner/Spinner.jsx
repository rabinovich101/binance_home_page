"use client"
import { BeatLoader } from "react-spinners";


const Spinner = () => {
    return (
        <div className="spinner">
            <BeatLoader
                color="#000000"
                speedMultiplier={1}
            />
        </div>
    );
}

export default Spinner;