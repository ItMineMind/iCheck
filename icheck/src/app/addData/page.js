import Image from "next/image";

export default function Create() {
  const testData = [
    { id: 1, name: "John Doe", content: 25 },
    { id: 2, name: "Jane Doe", content: 30 },
    { id: 3, name: "John Smith", content: 35 },
  ]
  return (
    <div>
      {testData.map((data) => (
        <div key={data.id}>
          <p>Name: {data.name} content: {data.content}</p>
        </div>
      ))}
      
    </div>
  );
}
