import Image from "next/image";

export default function Sidebar({ setCurrentTab }) {
    return <aside className="w-72 h-100% mt-8 bg-slate-950 flex flex-col align-center px-8 py-16 rounded-tr-xl shadow-2xl ">
            <Image src="/assets/yummy.png" width={200} height={400} alt="logo"></Image>
            <h2 className="mb-8 font-bold font-mono text-center text-2xl md:text-4xl text-stone-200 ">Yummy</h2>
            <button onClick={() => setCurrentTab('new-recipe')} className="btn btn-outline btn-neutral md:text-base">+ Afegir Recepta</button>
            <button onClick={() => setCurrentTab('view-recipes')} className=" mt-4 btn btn-warning md:text-base"> Veure Receptes </button>
        </aside>
}