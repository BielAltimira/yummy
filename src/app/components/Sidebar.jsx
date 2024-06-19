import Image from "next/image";

export default function Sidebar({ setCurrentTab }) {
    return <aside className="flex flex-col align-center w-1/3 px-8 py-16 bg-slate-950 text-stone-50 md:w-72 rounded-tr-xl shadow-2xl">
        <Image src="/assets/yummy.png" width={200} height={400} alt="logo"></Image>
        <h2 className="mb-8 font-bold font-mono text-center md:text-4xl text-stone-200 ">Yummy</h2>
        <button onClick={() => setCurrentTab('new-recipe')} className="btn btn-outline btn-neutral md:text-base">+ Afegir Recepta</button>
        <button onClick={() => setCurrentTab('view-recipes')} className=" mt-4 btn btn-warning md:text-base"> Veure Receptes </button>
    </aside>
}