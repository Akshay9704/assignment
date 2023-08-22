import React, { useState } from "react";
import Contacts from "./contacts";
import Data from "./data";

const Main = () => {
  const [addContacts, setAddContacts] = useState(false);
  const [showContacts, setShowContacts] = useState(true);
  const [charts, setCharts] = useState(false);

  const handleClick = () => {
    setAddContacts(true);
  };

  const openContacts = () => {
    setShowContacts(true);
    setCharts(false); // Reset the charts state when opening "Contacts"
  };

  const openCharts = () => {
    setCharts(true);
    setShowContacts(false); // Reset the showContacts state when opening "Charts and Maps"
  };

  return (
    <div className="h-screen">
      <header className="w-full border-b-2">
        <nav className="bg-sky-600 p-4">
          <h1 className="text-center text-white">Hello</h1>
        </nav>
      </header>
      <header className="h-full w-48 absolute">
        <nav className="bg-sky-600 flex flex-col py-6 h-full">
          <ul className="space-y-5 text-center">
            <li
              className="text-white text-xl cursor-pointer"
              onClick={openContacts}
            >
              Contacts
            </li>
            <li
              className="text-white text-xl cursor-pointer"
              onClick={openCharts}
            >
              Charts and Maps
            </li>
          </ul>
        </nav>
      </header>

      {showContacts &&(
        <div className="contacts flex flex-col justify-center items-center mt-10">
          {!addContacts ? (
            <button
              className="border-black border-2 py-4 px-12"
              onClick={handleClick}
            >
              Create Contact
            </button>
          ) : (
            <Contacts />
          )}

         {/* IT SHOULD NOT SHOW IF THERE IS ONE CONTACT */}
          {!addContacts && (
            <div className="border-4 py-6 px-10 mt-20">
              <h3>No Contacts Found</h3>
              <h3>Please add contacts from</h3>
              <h3>Create Contact Button</h3>
            </div>
          )}
        </div>
      )}
      {charts && (
        <div>
          <Data/>
        </div>
      )}
    </div>
  );
};

export default Main;
