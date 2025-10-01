import DashCard from "@/components/DashCard";
import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DashCard />
      <StatsCard />
    </div>
  );
};

export default Page;
