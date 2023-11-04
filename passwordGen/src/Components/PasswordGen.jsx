import { useCallback, useEffect, useRef, useState } from "react";

export const PasswordGen = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, SetNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwrodRef=useRef(null);
  //password gen metod
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+~/[]'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length, setPassword]);

  const copyPasswordToClipboard= useCallback(()=>{
    passwrodRef.current?.select();
    window.navigator.clipboard.writeText(password);
   // alert("password copy on clipboard")
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <h3 className="text-2xl text-center mb-3 ">Password Generator</h3>
      <div
        className="flex shadow rounded-lg overflow-hidden mb-4 w-3/4
      "
      >
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwrodRef}
        />

        <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700  text-white hover:bg-blue-300">Copy</button>
      </div>
      <div className="flex text-sm gap-x-5">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer p-3"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => {
              SetNumbersAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id="charInput"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </>
  );
};
