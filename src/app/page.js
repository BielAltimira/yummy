import Image from "next/image";
import Sidebar from "./components/Sidebar";
import NovaRecepta from "./components/NovaRecepta";

export default function Home() {
  return (
    <main className="h-screen pt-8 flex gap-8">
      <Sidebar/>
      <NovaRecepta/>
    </main>
  );
}
