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
                className='w-1/2'
                src={`https://dtpiwgvmonwyoblpnmto.supabase.co/storage/v1/object/public/receptes/${recepta.id}.jpg`}
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