import React from "react";
import { useNavigate } from "react-router-dom";

function LipSyncResult() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the New Page</h1>
      <p>This is an additional page in your React app.</p>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </div>
  );
}

export default LipSyncResult;
