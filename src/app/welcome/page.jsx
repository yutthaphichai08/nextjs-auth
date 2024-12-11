"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function WelcomePage() {
  const { data: session } = useSession();
  // console.log(session);

  if (!session) redirect("/login");

  return (
    <div>
      <Navbar session={session} />
      <h3 className="text-3xl my-3">Welcome {session.user?.name}</h3>
      <p>{session.user?.email}</p>
      <hr className="my-3" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        tempora nobis, aut tempore quis, a omnis iste perspiciatis voluptas
        commodi quod nisi, est hic eos nihil cupiditate similique! Beatae,
        dolores!
      </p>
    </div>
  );
}

export default WelcomePage;
