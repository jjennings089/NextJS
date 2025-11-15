import HotelBlock from "./HotelBlock";
import { promises as fs } from 'fs';
import path from 'path';

async function getData() {
  const filePath = path.join(process.cwd(), './public/data/hotel.json');
  const res = await fs.readFile(filePath, 'utf8');
  return JSON.parse(res);

  /**************************************** */
  // Changed link call to file load
  
  //const res = await fetch("https://snowtooth-hotel-api.fly.dev");
  //return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <main>
      <div>
        <h1>Hotel Details</h1>
        <div>
          {data.map((hotel) => (
            <HotelBlock
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
