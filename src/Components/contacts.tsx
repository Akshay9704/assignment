import React from 'react';

const Contacts = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className='mb-8 text-3xl'>Create Contact Screen</h1>
        <form className='border-4 py-5 px-20'>
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" className='border-2 py-2 px-4 mb-4' /><br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" className='border-2 py-2 px-4 mb-4' /><br />
          <label htmlFor="status">Status:</label><br />
          <input type="radio" id="Active" name="fav_language" value="Active"/>
          <label htmlFor="css">Active</label><br></br>
          <input type="radio" id="Inactive" name="fav_language" value="Inactive"/>
          <label htmlFor="css">Inactive</label><br></br>
        </form>
        <button className='border-2 py-2 px-4 mt-5'>Save Editted Contact</button>
      </div>
    </div>
  );
};

export default Contacts;

