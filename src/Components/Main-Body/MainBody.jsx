import React from "react";

const MainBody = ({ player, playerBtn }) => {
  const { category, country, img, name, price, ratings } = player;
  // console.log(playerBtn);

  return (
    <div className="card w-[100%] bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
          
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {name}</h2>
        <p className="text-xl">Country : {country}</p>
        <p className="text-xl">Category : {category}</p>
        <p className="text-2xl">Price : {price}</p>
        <p className="">Rating : {ratings}</p>
        <div className="card-actions justify-end">
          <button onClick={() => playerBtn(player)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
