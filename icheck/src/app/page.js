"use client";

import { useState, useEffect } from "react";
import { db } from "../../api/firebaseCRUD";
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState([]);
  const [top5Items, setTop5Items] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    async function fetchData() {
      Promise.all([db.getItems() , db.get5TopItem()]).then((value)=>{
        setData(value[0]),
        setTop5Items(value[1])
      })

    }
    fetchData();
  }, [refreshKey]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  function create() {
    if (name === "" || content === "") return;
    db.addItem(name, 1, content, "testImgPath");
    refreshKey === 0 ? setRefreshKey(1) : setRefreshKey(0);
  }

  function deleteData(id) {
    db.deleteItem(id);
    refreshKey === 0 ? setRefreshKey(1) : setRefreshKey(0);
  }

  function plusCount(id) {
    db.searchCount(id);
    refreshKey === 0 ? setRefreshKey(1) : setRefreshKey(0);
  }

  function DataShow({ data }) {
    return (
      <>
        {data.map((data) => (
          <div key={data.id}>
            <p>
              search count: {data.searchCount} Name: {data.title} content:{" "}
              {data.content}
              <button onClick={() => deleteData(data.id)}>Delete</button>
              <button onClick={() => plusCount(data.id)}>Plus Count</button>
              <Link href={`/item/${data.id}`}>
                  View Item
              </Link>
            </p>
          </div>
        ))}
      </>
    );
  }

  return (
    <div>
        <Link href={`/login`}>
          Login Page
        </Link><br />

      All item
      <DataShow data={data} />

      
      <a href="/addData">Add Data (Goto add data page)</a>
      <br />
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <p>--</p>
      <input type="text" onChange={(e) => setContent(e.target.value)} />
      <br />
      <button onClick={() => create()}>Add new</button>
      <button onClick={() => console.log(top5Items)}>Show Data</button>

     <br/>  
      Top 5 item
      <DataShow data={top5Items} />
      <br />
    </div>
  );
}
