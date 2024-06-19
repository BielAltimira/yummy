"use client";
import Sidebar from "./components/Sidebar";
import NovaRecepta from "./components/NovaRecepta";
import NoSelection from "./components/NoSelection";
import VeureReceptes from "./components/VeureReceptes";
import { useState } from "react";

export default function Home() {

  const [currentTab, setCurrentTab] = useState('no-selection');

  return (
    <main className="h-screen pt-8 flex gap-8">
      <Sidebar setCurrentTab={setCurrentTab}/>
      <div className="flex align-center justify-center w-screen">
        {currentTab === 'no-selection' && <NoSelection setCurrentTab={setCurrentTab} />}
        {currentTab === 'new-recipe' && <NovaRecepta setCurrentTab={setCurrentTab}/>}
        {currentTab === 'view-recipes' && <VeureReceptes/>}
      </div>
    </main>
  );
}
