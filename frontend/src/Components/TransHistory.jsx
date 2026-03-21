import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Appbar } from "./Appbar";

export const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all"); 
  const [userId, setUserId] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("token");

        
        const userRes = await axios.get("http://localhost:3000/api/v1/user/me", {
          headers: { Authorization: "Bearer " + token },
        });
        setUserId(userRes.data._id);

        
        const res = await axios.get("http://localhost:3000/api/v1/account/transactions", {
          headers: { Authorization: "Bearer " + token },
        });
        setTransactions(res.data);
      } catch (err) {
        console.log("Failed to fetch transactions:", err);
      }
    };

    fetchTransactions();
  }, []);

  
  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "received") return tx.to._id === userId;
    if (filter === "sent") return tx.from._id === userId;
    return true; 
  });

  return (
    <>
      <Appbar />
      <div className="mt-6 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg">Transaction History</h2>
        <div>
          <Button onClick={() => navigate("/dashboard")} label={"Back"} />
        </div>
        </div>

        
        <div className="flex gap-2 mb-4">
          <div>
          <Button
            onClick={() => setFilter("all")}
            label="All"
            className={filter === "all" ? "bg-blue-600" : "bg-gray-300"}
          />
          </div>  
          <div>
          <Button
            onClick={() => setFilter("received")}
            label="Received"
            className={filter === "received" ? "bg-green-600" : "bg-gray-300"}
          />
          </div>
          <div>
          <Button
            onClick={() => setFilter("sent")}
            label="Sent"
            className={filter === "sent" ? "bg-red-600" : "bg-gray-300"}
          />
          </div>
        </div>

        <div className="border rounded p-4 bg-white shadow-lg">
          {filteredTransactions.length === 0 ? (
            <p>No transactions found.</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr>
                  {filter !== "sent" && <th className="p-2">From</th>}
                  {filter !== "received" && <th className="p-2">To</th>}
                  <th className="p-2">Amount</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => {
                  const isReceived = tx.to._id === userId;
                  return (
                    <tr key={tx._id} className="border-t">
                      {filter !== "sent" && <td className="p-2">{tx.from.firstname}</td>}
                      {filter !== "received" && <td className="p-2">{tx.to.firstname}</td>}
                      <td
                        className={`p-2 font-bold ${
                          isReceived ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        Rs {tx.amount.toFixed(2)}
                      </td>
                      <td className="p-2">{new Date(tx.createdAt).toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

