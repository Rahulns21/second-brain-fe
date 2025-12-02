import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {

  return (
    <div className="flex">
      <Button variant="primary" size="lg" text="Click me" startIcon={<PlusIcon />} />
      <Button variant="secondary" size="sm" text="Share" startIcon={<ShareIcon />} />
    </div>
  )
}

export default App;
