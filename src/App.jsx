import { useState } from "react";

function App() {
  const [length, setlength] = useState('');
  const [numberallowed, setnumberallowed] = useState(false);

  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  console.log(length);
  console.log(charallowed);
  console.log(numberallowed);
  setpassword("abcd");
  setnumberallowed("abcd");
  setcharallowed("true");

  return (
    <>
      <h1 className="text-6xl mt-4 text-center font-bold translate-x-1  text-green-500">
        Password Generator
      </h1>
      <div className="box bg-slate-700 py-32 mt-11 min-w-1/2 flex justify-center gap-2 ">
        <input
          className="w-1/2 py-6 text-2xl outline-blue-500 rounded-3xl"
          type="text"
          value={password}
        />
        <button className="bg-blue-400 py-7 px-6 rounded-2xl">Copy</button>
      </div>

      <div className="bo2 bg-slate-600 py-8 flex gap-6 justify-center">
        <label htmlFor="">Length</label>
        <input
          type="range"
          width={25}
          maxLength={400}
          minLength={200}
          className="w-1/4"
          onChange={(e) => setlength(e.target.value)}
        />
        <label htmlFor="">Add Number </label>
        <input type="checkbox" name="add number" />
        <label htmlFor="">Add Character </label>
        <input type="checkbox" name="add char" />
      </div>
    </>
  );
}

export default App;
