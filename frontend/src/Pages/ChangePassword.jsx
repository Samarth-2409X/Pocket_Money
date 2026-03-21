import { useState } from "react"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/inputBox"
import { SubHeading } from "../Components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const ChangePassword = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
      <div className="bg-gray-100 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-10 shadow-2xl">

            <Heading label={"Update Account"} />
            <SubHeading label={"Change your account details"} />

            <InputBox 
              onChange={(e) => setFirstname(e.target.value)} 
              placeholder="First Name" 
              label={"First Name"} 
            />

            <InputBox 
              onChange={(e) => setLastname(e.target.value)} 
              placeholder="Last Name" 
              label={"Last Name"} 
            />

            <InputBox 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="New password" 
              label={"Password"} 
            />

            <div className="pt-4">
              <Button 
                onClick={async () => {
                  const token = localStorage.getItem("token");

                  
                  const body = {};
                  if (firstname) body.firstname = firstname;
                  if (lastname) body.lastname = lastname;
                  if (password) body.password = password;

                  await axios.put(
                    "http://localhost:3000/api/v1/user/changepassword", 
                    body, 
                    {
                      headers: {
                        Authorization: `Bearer ${token}`
                      }
                    }
                  );

                  navigate("/signin");
                }} 
                label={"Update"} 
              />
            </div>
            
          </div>
        </div>
      </div>
    )
}
