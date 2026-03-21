import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Button } from '../Components/Button';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate(); 

    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");

    const handleTransfer = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                to: id,
                amount
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });

            setMessage("✅ " + res.data.message);

        } catch (error) {
            if (error.response && error.response.data) {
                setMessage("❌ " + (error.response.data.message || error.response.data.msg));
            } else {
                setMessage("❌ Payment failed, please try again.");
            }
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <>
        <div className='flex bg-gray-100 p-2'>
            <div className="pt-2 justify-start">
                <Button 
                  onClick={() => navigate("/dashboard")} 
                  label={"Back"}
                />
            </div>
        </div>
            <div className="flex justify-center h-screen bg-gray-100">
                <div className="h-full flex flex-col justify-center">
                    <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                        <div className="flex flex-col space-y-1.5 pt-6">
                            <h2 className="text-3xl font-bold text-center">Send Money</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                    <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                                </div>
                                <h3 className="text-2xl font-semibold">{name}</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium leading-none"
                                        htmlFor="amount"
                                    >
                                        Amount (in Rs)
                                    </label>
                                    <input
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        type="number"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        id="amount"
                                        placeholder="Enter amount"
                                    />
                                </div>
                                <button 
                                    onClick={handleTransfer} 
                                    className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                                >
                                    Initiate Transfer
                                </button>

                                {message && (
                                    <p
                                      className={`text-center text-sm mt-2 font-medium ${
                                        message.includes("✅") ? "text-green-600" : "text-red-600"
                                      }`}
                                    >
                                      {message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
