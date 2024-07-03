 import React, { useState, useEffect } from 'react'; 
 import { supabase } from '../../lib/supabase';

export default function recepta({ setCurrentTab, recipe}) {
    const [recepta, setRecepta] = useState({});

    useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('receptes').select('*').eq("id", recipe).single();
        if (error) {
          console.error('Error fetching recipes:', error);
        } else {
            setRecepta(data);
            console.log(data.ingredients.ingredients)
        }
      } catch (error) {
        console.error('Unexpected error fetching recipes:', error);
      } 
    };
    fetchData();
  }, []);

    return (
        <div className='flex flex-col items-center pt-12'>
            <h1 className='text-black font-bold text-6xl'>{recepta.recepta}</h1>
            <h2 className='text-zinc-500 font-bold text-xl pt-2'>{recepta.data}</h2>
            <p className='w-[80%] text-xl text-justify bg-zinc-300 p-8 mt-8 text-black'>{recepta.descripció}</p>
            <div className='flex flex-row p-12 align-center justify-between w-[70rem]'>
              <img
                src="https://www.allrecipes.com/thmb/nhTXGubKmaQpmi4DZK_q1j2YGFk=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/20513-classic-waffles-mfs-025-4x3-81c0f0ace44d480ca69dd5f2c949731a.jpg"
                alt="shoes"
              />
              <div >
                <h2 className='text-black font-bold text-4xl pb-2'>Ingredients</h2>
                <ul className='list-disc pl-4'>
                        {recepta.ingredients && recepta.ingredients.ingredients.map((item, index) => (
                        <li className="text-black text-xl" key={index}>
                            {item.ingredientName} : {item.quantity} 
                        </li>
                        ))}
                </ul>
              </div>
            
            </div>
        </div>
    )
}