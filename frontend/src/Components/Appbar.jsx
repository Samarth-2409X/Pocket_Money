import { useEffect, useState } from "react";
import axios from "axios";
import { RupeeIcon } from "../Icons/RupeeIcon";
import { Profile } from "./Profile";

export const Appbar = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [userId, setUserId] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/user/me", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setFirstname(res.data.firstname);
        setLastname(res.data.lastname);
        setUserId(res.data._id);
      } catch (err) {
        console.log("Failed to fetch user info:", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div className="shadow h-14 flex justify-between relative">
        {/* Left side logo */}
        <div className="flex flex-col justify-center items-start h-full ml-4 font-bold">
          <div className="flex justify-center items-center gap-2">
            <div><RupeeIcon /></div>
            <div className="text-lg"><p>Pocket Money</p></div>
          </div>
        </div>

        
        <div className="flex">
          <div className="flex flex-col justify-center h-full mr-4">
            Hello, {firstname}
          </div>

          <div
            className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            <div className="flex flex-col justify-center h-full text-xl">
              {firstname ? firstname[0].toUpperCase() : "U"}
            </div>
          </div>
        </div>
      </div>

      
      {showProfile && (
        <Profile
          firstname={firstname}
          lastname={lastname}
          userId={userId}
          closeProfile={() => setShowProfile(false)}
        />
      )}
    </div>
  );
};
