import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
export const Balance = ({ value }) => {

    const navigate = useNavigate(); 
    return (
        <>
        <div className="flex justify-between">
            <div className="flex pb-2">
                <div className="font-bold text-lg">
                    Your Account balance
                </div>
                <div className="font-semibold ml-4 text-lg">
                    Rs {Number(value).toFixed(2)}
                </div>
            </div>
            <div className="flex justify-end ">
                <Button 
                  onClick={() => navigate("/transactions")} 
                  label={"Transactions"}
                />
                
            </div>
        </div>
        </>
    );
};
