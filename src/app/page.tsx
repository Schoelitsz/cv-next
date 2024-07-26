import Image from "next/image";
import { sql } from "@vercel/postgres";


export default function Home() {
 

  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/icons8-tools.gif"
        alt="Under Construction"
        width={100}
        height={100}
      />
    </div>
  );
}
