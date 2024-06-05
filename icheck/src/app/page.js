'use client';

import { useState , useEffect } from "react";
import { db } from "../../api/firebaseCRUD";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setData(await db.getItems());
    }
    fetchData();
  }, []);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  
  function create() {
    if(name === "" || content === "") return;
    db.addItem(name, 1, content, "testImgPath")
  }

  function deleteData(id){
    setTestData(testData.filter(data => data.id !== id));
  }

  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <p>Name: {data.title} content: {data.content} <button onClick={() => deleteData(data.id)}>Delete</button></p>
        </div>
      ))}
      <a href="/addData">Add Data (Goto add data page)</a>
      <br />
      <input type="text" onChange={(e) => setName(e.target.value)} /><br />
      <p>--</p>
      <input type="text" onChange={(e) => setContent(e.target.value)} /><br />
      <button onClick={() => create()}>Add new</button>
    </div>
  );
}
