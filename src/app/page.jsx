"use client";

import { useSession } from "next-auth/react";
import Navbar from "./components/Navbar";

export default function Home() {

  const {data: session} = useSession();

  return (
    <main>
      <Navbar session={session}/>
      <div className="container mx-auto">
        <h3>Welcome to home page</h3>
        <hr className="my-3" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          facilis delectus tempore sunt, architecto modi nihil molestias libero.
          Perferendis accusantium voluptatibus esse nesciunt repudiandae
          voluptatum numquam corrupti temporibus, culpa quo?
        </p>
      </div>
    </main>
  );
}
