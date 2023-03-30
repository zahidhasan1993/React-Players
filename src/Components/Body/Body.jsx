import React, { useEffect, useState } from "react";
import MainBody from "../Main-Body/MainBody";
import SideBody from "../Side-Body/SideBody";

const Body = () => {
  const [players, setPlayers] = useState([]);
  const [singlePlayer, setSinglePlayer] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleBuyNow = (player) => {
    const previousPlayers = JSON.parse(localStorage.getItem('PlayersInfo'));
    let playersInfo = JSON.stringify(player)
    if(previousPlayers){
      const newPlayer = [...playersInfo,player];
      // localStorage.setItem('playersInfo',newPlayer);
      // setSinglePlayer(JSON.parse(newPlayer))
      console.log(newPlayer);
    }else{
      localStorage.setItem('PlayersInfo',playersInfo);
      setSinglePlayer(player)
    }
  };
  console.log(singlePlayer);

  return (
    <div className="maincontainer grid md:grid-cols-4 gap-4">
      <div className="mainbody md:col-span-3 grid md:grid-cols-3 gap-6">
        {players.map((player) => (
          <MainBody key={player.id} player={player} playerBtn = {handleBuyNow}></MainBody>
        ))}
      </div>
      <div className="sidebody">
          <SideBody key={singlePlayer.id} player={singlePlayer}></SideBody>
      </div>
    </div>
  );
};

export default Body;
