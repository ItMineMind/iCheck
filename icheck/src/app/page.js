'use client';

import { useState , useEffect } from "react";
import { db } from "../../api/firebaseCRUD";

export default function Home() {
  const [data, setData] = useState([]);
  const [refreshKey , setRefreshKey] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setData(await db.getItems());
    }
    fetchData();
    
  }, [refreshKey]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  
  function create() {
    if(name === "" || content === "") return;
    db.addItem(name, 1, content, "testImgPath")
    refreshKey === 0 ? setRefreshKey(1) : setRefreshKey(0);
  }

  function deleteData(id){
    console.log("Deleting document with ID: ", id);
    db.deleteItem(id);
    setData(data.filter((data) => data.id !== id));
    refreshKey === 0 ? setRefreshKey(1) : setRefreshKey(0);
  }

  return (
    <div>
      {data.map((data) => (
        <div key={data.id}>
          <p>ID: {data.id} Name: {data.title} content: {data.content} <button onClick={() => deleteData(data.id)}>Delete</button></p>
        </div>
      ))}
      <a href="/addData">Add Data (Goto add data page)</a>
      <br />
      <input type="text" onChange={(e) => setName(e.target.value)} /><br />
      <p>--</p>
      <input type="text" onChange={(e) => setContent(e.target.value)} /><br />
      <button onClick={() => create()}>Add new</button>
      <button onClick={() => console.log(data)}>Show Data</button>
    </div>
  );
}
