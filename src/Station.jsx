import React, { useEffect, useState } from "react";
import axios from "axios";
import Trains from "./Trains";

function Station(props) {
  const [stationInfo, setStationInfo] = useState(null);

  useEffect(() => {
    const getTrains = async () => {
      const response = await axios.get(
        `https://api.wheresthefuckingtrain.com/by-id/${props.stationId}`
      );
      setStationInfo(response.data.data[0]);
    };
    getTrains();
  }, []);

  if (!stationInfo) return <h3>Loading...</h3>;

  return (
    <div className="train">
      <h3>{stationInfo.name}</h3>
      <div className="train-times">
        <Trains arrivals={stationInfo.N} direction="Northbound"/>
        <Trains arrivals={stationInfo.S} direction="Southbound"/>
      </div>
    </div>
  );
}

export default Station;
