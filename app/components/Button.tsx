import React from "react";
// Button types are
// 1. flat-gradient, 2.flat, 3.rounded-gradient, 4.rounded

interface BUTTON {
    text: string;
    icon?: object;
    type: string;
  }

export const Button = ({ text, icon, type }: BUTTON): JSX.Element => {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      {type === "flat-gradient" ? (
        <button className="flex text-center justify-center gap-x-1 bg-gradient-to-r from-pink-500 to-red-900 text-gray-100 py-1 text-sm font-normal mt-2 rounded-sm w-1/2 cursor-pointer || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900">
          <p className="my-2">{text}</p> <span>{icon}</span>
        </button>
      ) : type === "flat" ? (
        <button className="flex text-center justify-center gap-x-1 bg-gray-900 text-white py-1 text-sm font-normal mt-2 rounded-sm w-1/2 cursor-pointer || hover:bg-gray-900 hover:text-white">
          <p className="my-2">{text}</p> <span>{icon}</span>
        </button>
      ) : type === "rounded-gradient" ? (
        <button className="w-full md:w-auto md:ml-auto mt-4 md:mt-0 bg-pink-900 bg-gradient-to-r from-pink-900 to-red-900 text-sm  text-white font-semibold py-2 px-4 rounded-full || hover:bg-gradient-to-l hover:from-pink-900 hover:to-red-900 ">
          <p className="mt-1">{text}</p> <span>{icon}</span>
        </button>
      ) : type === "rounded" ? (
        <button className="px-8 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200">
          <p className="mt-1">{text}</p> <span>{icon}</span>
        </button>
      ) : null}
    </>
  );
};
