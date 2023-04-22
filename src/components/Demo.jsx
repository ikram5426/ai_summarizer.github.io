import { useEffect, useState } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <section className='w-full mt-16 max-w-xl'>
      <div className='flex flex-col w-full gap-3'>
        <form className="flex justify-center items-center relative" onSubmit={()=>{}}>
          <img src={linkIcon} alt="link icon" className="w-5 my-3 ml-3 left-0 absolute" />
          <input type="url" value={''} required  placeholder="Enter URL here" onChange={() => {} } className="url_input peer"/>
          <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">↩</button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
