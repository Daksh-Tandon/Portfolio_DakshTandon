import React from 'react'

const Location = () => {
  return (
    <div className="location" style={{border:"2px solid black", borderRadius:"12px"  ,marginLeft:"15px"}}>
     
     {/* for the current usage i used chatgpt to see how can i show the map in my web page */}
      <h3 style={{ fontSize: "22px", marginBottom: "4px" }}>
        📍 Currently in
      </h3>

      <p style={{ color: "#555", fontSize: "16px" }}>
        New Delhi, India
      </p>

      <iframe
        title="location-map"
        src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
        loading="lazy"
        allowFullScreen
        style={{
         marginLeft:"10px",
          width: "80%",
          maxWidth: "600px",
          height: "200px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      ></iframe>
    </div>
  );
};

export default Location;
