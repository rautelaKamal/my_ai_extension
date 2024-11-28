import React from 'react';

const NavBar = () => {
    return (

              <div className='w-full h-16 bg-amber-100'>
      
              <div className='flex items-center justify-between w-full px-8 '>
                <div className='ml-0 mt-5'>Easify</div> 
                
               
                <div className='flex justify-start -ml-11 items-center space-x-9 cursor-pointer '>
                  <div>Product</div>
                  <div>Work</div>
                  <div>Education</div>
                  <div>Pricing</div>
                  <div>Resources</div>
                </div>
            
        
                <div className="flex items-center space-x-9">
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-300">Github</button>
                <button className="bg-orange-300 text-white px-4 py-2 rounded hover:bg-orange-500">Contact Us</button>
                <button className="bg-orange-300 text-white px-4 py-2 rounded hover:bg-orange-500">Add to Browser</button>
                </div>
              </div>
            </div>


   
    );
};

export default NavBar;
