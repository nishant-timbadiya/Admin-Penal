import React from "react";
import { useState } from "react";
import DashHeader from "./DashHeader";
import DashNav from "./DashNav";
import Free from "./Free";

function Dashboard() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const handleMenuClick = () => {
    setIsNavClosed((prevIsNavClosed) => !prevIsNavClosed);
  };
  return (
    <div className="h-">
      <DashHeader handleMenuClick={handleMenuClick} />
      <Free />
      <div className="main-dashbord">
        <DashNav isNavClosed={isNavClosed} />
        <div className="w-full p-10 bg-white lg:z-30">
          <div className="grid lg:grid-cols-12 grid-cols-3  border rounded-md p-5 items-center mb-5  bg-blue-100">
            <div className="col-span-10">
                <div className="font-semibold">User Name: <span className="font-normal">John Deo</span></div>
                <div className="font-semibold">Mobile Number: <span className="font-normal">9852147632</span></div>
                <div className="font-semibold">Email: <span className="font-normal">john@gmail.com</span></div>
                <div className="font-semibold">Password: <span className="font-normal">********</span></div>
            </div>
            <div className=""><button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">Accept</button></div>
            <div><button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">Reject</button></div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-3 border rounded-md p-5 items-center mb-5 bg-blue-100">
            <div className="col-span-10">
                <div className="font-semibold">User Name: <span className="font-normal">John Deo</span></div>
                <div className="font-semibold">Mobile Number: <span className="font-normal">9852147632</span></div>
                <div className="font-semibold">Email: <span className="font-normal">john@gmail.com</span></div>
                <div className="font-semibold">Password: <span className="font-normal">********</span></div>
            </div>
            <div className=""><button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">Accept</button></div>
            <div><button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">Reject</button></div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-3 border rounded-md p-5 items-center mb-5 bg-blue-100">
            <div className="col-span-10">
                <div className="font-semibold">User Name: <span className="font-normal">John Deo</span></div>
                <div className="font-semibold">Mobile Number: <span className="font-normal">9852147632</span></div>
                <div className="font-semibold">Email: <span className="font-normal">john@gmail.com</span></div>
                <div className="font-semibold">Password: <span className="font-normal">********</span></div>
            </div>
            <div className=""><button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">Accept</button></div>
            <div><button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">Reject</button></div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-3 border rounded-md p-5 items-center mb-5 bg-blue-100">
            <div className="col-span-10">
                <div className="font-semibold">User Name: <span className="font-normal">John Deo</span></div>
                <div className="font-semibold">Mobile Number: <span className="font-normal">9852147632</span></div>
                <div className="font-semibold">Email: <span className="font-normal">john@gmail.com</span></div>
                <div className="font-semibold">Password: <span className="font-normal">********</span></div>
            </div>
            <div className=""><button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">Accept</button></div>
            <div><button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">Reject</button></div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-3 border rounded-md p-5 items-center mb-5 bg-blue-100">
            <div className="col-span-10">
                <div className="font-semibold">User Name: <span className="font-normal">John Deo</span></div>
                <div className="font-semibold">Mobile Number: <span className="font-normal">9852147632</span></div>
                <div className="font-semibold">Email: <span className="font-normal">john@gmail.com</span></div>
                <div className="font-semibold">Password: <span className="font-normal">********</span></div>
            </div>
            <div className=""><button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">Accept</button></div>
            <div><button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">Reject</button></div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-3 border rounded-md p-5 items-center mb-5 bg-blue-100">
            <div className="col-span-10">
                <div className="font-semibold">User Name: <span className="font-normal">John Deo</span></div>
                <div className="font-semibold">Mobile Number: <span className="font-normal">9852147632</span></div>
                <div className="font-semibold">Email: <span className="font-normal">john@gmail.com</span></div>
                <div className="font-semibold">Password: <span className="font-normal">********</span></div>
            </div>
            <div className=""><button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">Accept</button></div>
            <div><button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">Reject</button></div>
          </div>
          <div className="grid lg:grid-cols-12 grid-cols-3 border rounded-md p-5 items-center mb-5 bg-blue-100">
            <div className="col-span-10">
                <div className="font-semibold">User Name: <span className="font-normal">John Deo</span></div>
                <div className="font-semibold">Mobile Number: <span className="font-normal">9852147632</span></div>
                <div className="font-semibold">Email: <span className="font-normal">john@gmail.com</span></div>
                <div className="font-semibold">Password: <span className="font-normal">********</span></div>
            </div>
            <div className=""><button className="w-max bg-green-600 p-2 text-sm px-5 text-white rounded-full">Accept</button></div>
            <div><button className="w-max bg-red-600 p-2 text-sm px-5 text-white rounded-full">Reject</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
