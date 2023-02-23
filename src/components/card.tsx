import React from "react";

const Card = (props: {
  ward: string;
  japanese_name: string;
  population: number;
  aref: string;
}) => {
  return (
    <li className="delay-10 group m-4 w-56 overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:scale-110 hover:bg-slate-50">
      <div className="my-2 flex place-items-center p-4 ">
        <img
          src={"src/assets/icons/" + props.ward + ".svg"}
          alt={props.ward + "'s logo."}
          className=" m-auto h-8 w-8 flex-none"
        />
        <div className="m-auto">
          <h1 className="m-auto flex-grow text-2xl font-black">{props.ward}</h1>
          <h5 className="text-xs">WARD</h5>
        </div>
      </div>
      <div className="flex place-items-center divide-x-2 bg-slate-200 p-4   text-center">
        <h2 className="w-1/2 text-lg font-bold">{props.japanese_name}</h2>
        <h2 className="w-1/2 text-sm">
          POP: {props.population.toLocaleString("en-US")}
        </h2>
      </div>
      <div>
        <img
          src={"src/assets/images/" + props.ward + ".webp"}
          alt={"An image of " + props.ward + " ward."}
          className=" m-auto h-56 w-56 bg-slate-200 object-cover contrast-150"
        />
      </div>
      <div className="my-4 flex place-content-evenly  place-items-center ">
        <a
          href={props.aref}
          className="w-32 rounded-md bg-slate-200 p-2 text-sm text-black transition-all hover:bg-blue-900 hover:text-white"
        >
          Visit
          <br />
          <b className="text-md">{props.ward}</b>
        </a>
      </div>
    </li>
  );
};

export default Card;

/// '../../assets/images/' + props.ward + '.webp'} alt={'An image of ' + props.ward + ' ward.'
