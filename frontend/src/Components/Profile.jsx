import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QrReader from "react-qr-scanner";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "./Button";

export const Profile = ({ firstname, lastname, userId, closeProfile }) => {
  const [scanMode, setScanMode] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        closeProfile();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeProfile]);

  
  const handleScanResult = (data) => {
    if (data) {
      setScanMode(false);
      window.location.href = data.text;
    }
  };

  
  const handleLogout = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");

    
    navigate("/signup");
  };

  return (
    <div
      ref={profileRef}
      className="absolute right-4 mt-2 w-64 bg-white shadow-2xl rounded-lg p-4 z-50"
    >
      
      <div className="flex flex-col items-center mb-4">
        <div className="rounded-full h-16 w-16 bg-slate-200 flex justify-center items-center text-2xl font-bold">
          {firstname ? firstname[0].toUpperCase() : "U"}
        </div>
        <p className="mt-2 font-medium">
          {firstname || "User"} {lastname || ""}
        </p>
      </div>

      
      <div className="flex justify-center mb-2">
        <QRCodeCanvas
          value={`http://localhost:5173/send?id=${userId}&name=${firstname}`}
          size={128}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
      </div>

      
      <div className="flex justify-center mb-2">
        <button
          onClick={() => setScanMode((prev) => !prev)}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          {scanMode ? "Close Camera" : "Scan QR Code"}
        </button>
      </div>

      
      {scanMode && (
        <div className="flex justify-center mt-2">
          <QrReader
            delay={300}
            style={{ width: 220 }}
            onError={(err) => console.error(err)}
            onScan={(data) => handleScanResult(data)}
          />
        </div>
      )}

      
      <div className="p-2">
        <Button
          onClick={() => navigate("/changepassword")}
          label={"Change Password"}
        />
      </div>
      <div className="p-2">
        <Button
          onClick={handleLogout}  
          label={"Log out"}
        />
      </div>
    </div>
  );
};
