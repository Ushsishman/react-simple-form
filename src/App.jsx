import Input from "./components/Input";
import { useState } from "react";
import Mapping from "./components/Mapping";

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div className="min-h-screen w-full bg-[#121113] flex flex-col justify-start items-center">
      <Input setUserData={setUserData} />
      <Mapping userData={userData} />
    </div>
  );
}

export default App;
