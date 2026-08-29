import { useState } from "react";

function Profile() {
  return (
    <div className="bg-indigo-500 min-h-screen flex flex-col items-center justify-start">
      <div>
        <h1 className=" mt-5 p-5 text-3xl font-bold text-yellow-300 border-2 rounded-lg text-outline">
          Create your Pogofile
        </h1>

        <div>
          <h2>Your Avators!</h2>
          <div className="flex flex-col  ">
            <input className="gap-2 m-2" />
            <input />
            <input />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Profile;
