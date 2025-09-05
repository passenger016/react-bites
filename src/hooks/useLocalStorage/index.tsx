import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useLocalStorage from "./useLocalStorage";

const UseLocalStorageDemo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);

  const { setItem, getItem, removeItem } = useLocalStorage("myKey");

  return (
    <div className="flex flex-col gap-5 w-3xl">
      <h1 className="text-2xl font-bold mb-2">Local Storage Demo</h1>
      <Input
        type="text"
        placeholder="Enter item to be added"
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex min-w-max justify-start items-center gap-3">
        <Button onClick={() => setItem(inputValue)}>Add Item</Button>
        <Button variant={"secondary"} onClick={() => console.log(getItem())}>Get Item</Button>
        <Button variant={"secondary"} onClick={()=>removeItem()}>Remove Item</Button>
      </div>
    </div>
  );
};

export default UseLocalStorageDemo;
