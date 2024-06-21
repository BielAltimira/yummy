import { useState } from "react";

export default function NovaRecepta({ setCurrentTab }) {
    const [ingredients, setIngredients] = useState([]);
    const [inputIngredient, setInputIngredient] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');

    const addIngredient = () =>{
        setIngredients([[inputIngredient, inputQuantity], ...ingredients, ]);
        setInputIngredient(''); 
        setInputQuantity('');
    };

    const deleteIngredient = (index) => {
        const updatedIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(updatedIngredients);
    };

    return <div className=" w-full pt-8 flex flex-row">
        <div className="w-1/2 pl-4">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={() => setCurrentTab('no-selection')} className="btn btn-outline text-black rounded-md">Cancel·lar</button></li>
                <li><button className="btn btn-warning rounded-md ">Guardar</button></li>
            </menu>
            <form>
                <div className="mb-8">
                    <label className="block mb-2 text-sm font-bold uppercase text-stone-500">Nom de la recepta</label>
                    <input type="text" placeholder="Sopa de macaco" className="input text-black input-bordered w-full bg-stone-200" />
                </div>
                <div className="mb-8">
                    <label className="block mb-2 text-sm font-bold uppercase text-stone-500">recepta</label>
                    <textarea className="textarea textarea-bordered w-full bg-stone-200 text-black h-[22rem]" placeholder="Fer bullir aigua i afegir sal..."></textarea>
                </div>
                 <div className="mb-8">
                    <label className="block mb-2 text-sm font-bold uppercase text-stone-500">Afegeix una imatge</label>
                    <input type="file" className="file-input file-input-bordered bg-stone-200 w-full max-w-xs" />
                </div>
            </form>
            <div className="mb-8">
                    <label className="block mb-2 text-sm font-bold uppercase text-stone-500">Afegir Ingredients</label>
                    <div className="w-full flex flew-row">
                        <label className="mt-4 block mb-2 text-sm font-bold text-stone-500 w-2/3">Ingredient</label>
                        <label className="mt-4 block mb-2 text-sm font-bold text-stone-500 ml-2 w-auto">Quantitat</label>
                    </div>
                    <input type="text" value={inputIngredient} onChange={(i) => setInputIngredient(i.target.value)} placeholder="Culo de mono" className="input text-black input-bordered w-2/3 bg-stone-200" />
                    <input type="text" value={inputQuantity} onChange={(q) => setInputQuantity(q.target.value)} placeholder="3 unitats" className="input text-black input-bordered w-auto ml-2 bg-stone-200" />
                    <div className="w-full flex justify-end">
                        <button type="button"  onClick={addIngredient} className="mt-4 self-end btn rounded-md text-white mr-2">Afegir</button>
                    </div>
            </div>
        </div>
        <div className="w-1/2 pl-16 pt-[5rem]">
            <p className="block mb-2 text-sm font-bold uppercase text-stone-500">Llista d'ingredients</p>
            <ul className="grid grid-cols-2 gap-4 pt-2">
                {ingredients.map((tuple, index) => (
                <li key={index} className="text-black text-xl pb-2">
                    <button onClick={() => deleteIngredient(index)} className="btn btn-error btn-square btn-xs mr-4 ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    <strong>{tuple[0]} </strong>: {tuple[1]}
                </li>
                ))}
            </ul>
        </div>
    </div>
}