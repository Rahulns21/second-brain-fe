import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon, ShareIcon } from "./icons";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-gray-background min-h-screen ">
      <div>
        <Sidebar />
      </div>
      <div className="px-4 ml-72 min-h-screen flex flex-col gap-4">
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }} />

        <div className="flex items-center justify-between w-full px-2">
          <div className="text-2xl font-semibold p-4">
            All Notes
          </div>

          <div className="flex items-center gap-2 p-8">
            <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon />} />
            <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon />} onClick={() => {
              setModalOpen(true);
            }} />
          </div>
        </div>

        <div className="flex flex-items gap-4 py-2">
          <Card type="youtube" link="https://www.youtube.com/watch?v=lwOPaNMTGh8" title="drink water everyday" />
          <Card type="twitter" link="https://x.com/Priyaa_Purohit/status/1996039911083045135?s=20" title="godiji" />
        </div>
      </div>
    </div>
  )
}

export default App;
