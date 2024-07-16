import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';



function VeureReceptes({setCurrentTab, setRecipe}) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  function handleSelect(id){
    setCurrentTab('recipe')
    setRecipe(id)
  } 

  useEffect(() => {
    const fetchData = async () => {

      const { img } = await supabase.storage.from('receptes').getPublicUrl('recipe.jpg')
      console.log(img)

      setIsLoading(true);
      try {
        const { data, error } = await supabase.from('receptes').select('*');

        if (error) {
          console.error('Error fetching recipes:', error);
        } else {
          setRecipes(data);
        }
      } catch (error) {
        console.error('Unexpected error fetching recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(recipes);


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-[7rem] pt-16 pb-16'>
        {recipes.map((recipe) => (
        <div key={recipe.id} className=" card bg-black w-96 h-[30rem] shadow-xl">
          <figure>
            <img
              src={`https://dtpiwgvmonwyoblpnmto.supabase.co/storage/v1/object/public/receptes/${recipe.id}.jpg`}
              alt="shoes"
            />
          </figure>
          <div className="card-body flex items-center justify-evenly">
            <h2 className="card-title text-white font-bold text-4xl text-center">{recipe.recepta}</h2>
            <div className="card-actions justify-center">
                <button onClick={() => handleSelect(recipe.id)} className="btn btn-warning">Veure més</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    // <div>
    //   {isLoading ? (
    //     <span className="loading loading-spinner loading-lg text-warning"></span>
    //   ) : (
    //     <div>
    //       <h2>Recetas</h2>
    //       {recipes.map((recipe) => (
    //         <div key={recipe.id}>
    //           <h2>{recipe.title}</h2>
    //           <p className='text-black'>{recipe.descripció}</p>
    //           {/* Puedes agregar más elementos aquí para mostrar otros detalles de la receta */}
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
}

export default VeureReceptes;



