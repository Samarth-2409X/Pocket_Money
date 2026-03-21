import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/inputBox";
import { SubHeading } from "../Components/SubHeading";

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userId", response.data.userId);
            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.msg || "Signin failed");
        }
    };

    return (
        <div className="bg-gray-100 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-10 shadow-2xl">
                    <Heading label={"Sign in"} />
                    <SubHeading label={"Enter your credentials to access your account"} />

                    <InputBox
                        onChange={e => setUsername(e.target.value)}
                        placeholder="samarth@gmail.com"
                        label={"Email"}
                    />
                    <InputBox
                        onChange={e => setPassword(e.target.value)}
                        placeholder="123456"
                        label={"Password"}
                        type="password"
                    />

                    <div className="pt-4">
                        <Button onClick={handleSignin} label={"Sign in"} />
                    </div>

                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
                </div>
            </div>
        </div>
    );
};
