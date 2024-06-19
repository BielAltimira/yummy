import Image from "next/image"


export default function NoSelection({ setCurrentTab }) {
    return <div className="h-screen -mt-8 pt-24 text-center w-2/3 ">
        <Image src="/assets/sad_tomato.png" width={120} height={120} alt="sense selecció" className="mx-auto"/>
        <h2 className="text-2xl font-bold text-stone-500 mt-4 my-4">No has seleccionat cap recepta!</h2>
        <p className="text-stone-400 text-m mb-4">Crea'n una de nova o busca'n una d'existent.</p>
        <p className="mt-8">
            <button onClick={() => setCurrentTab('new-recipe')} className="btn hover:bg-gray-300 border-none hover:text-slate-950 btn-neutral md:text-base">Crear nova recepta</button>
        </p>
    </div>
}