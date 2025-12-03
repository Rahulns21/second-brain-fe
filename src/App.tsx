import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon, ShareIcon } from "./icons";

function App() {
  return (
    <div className="bg-gray-background min-h-screen">
      <div className="flex justify-end items-center gap-2 p-8">
      <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon />} />
      <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon />} />
      </div>

      <div className="flex flex-items gap-2 py-2">
        <Card type="youtube" link="https://www.youtube.com/watch?v=lwOPaNMTGh8" title="drink water everyday" />
        <Card type="twitter" link="https://x.com/Priyaa_Purohit/status/1996039911083045135?s=20" title="godiji" />
      </div>
    </div>
  )
}

export default App;
