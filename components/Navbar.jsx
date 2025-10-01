"use client";
import React, { useState } from "react";
import {
  Filter,
  Search,
  Lightbulb,
  Settings,
  Bell,
  Star,
  Users,
  Link,
  Lock,
  User,
  GraduationCap,
  Video,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        <div className="flex items-center">
          <img
            src="wealth-elite-logo.png"
            alt="Wealth Elite"
            className="h-15"
          />
        </div>

        <div className="flex flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder="ex. Live portfolio"
            className="w-full border border-gray-300 bg-gray-100 rounded-l-md px-3 py-2 text-sm focus:outline-none"
          />
          <button className="bg-gray-200 border border-gray-300 border-l-0 rounded-r-md px-3 flex items-center justify-center">
            <Search size={18} />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-gray-700 whitespace-nowrap">
          <Filter size={20} />
          <Lightbulb size={20} />
          <Settings size={20} />
          <Bell size={20} />
          <Star size={20} />
          <Users size={20} />
          <Link size={20} />
          <User size={20} />
          <Lock size={20} />
          <GraduationCap size={20} />
          <Video size={20} />
          <button className="flex items-center gap-1 text-sm font-medium text-gray-700">
            <LogOut size={18} /> LOGOUT
          </button>
        </div>

        <button
          className="lg:hidden p-2 border rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="bg-red-600 text-white">
        <ul className="hidden lg:flex items-center gap-10 px-6 py-4 text-sm font-semibold">
          <li>HOME</li>
          <li>CRM</li>
          <li>UTILITIES</li>
          <li>INSURANCE</li>
          <li>ASSETS</li>
          <li>MUTUAL</li>
          <li>RESEARCH</li>
          <li>TRANSACT ONLINE</li>
          <li>GOAL GPS</li>
          <li>FINANCIAL PLANNING</li>
          <li>WEALTH REPORT</li>
          <li>OTHER</li>
        </ul>

        {isOpen && (
          <ul className="flex flex-col gap-3 px-6 py-4 text-sm font-semibold lg:hidden">
            <li>HOME</li>
            <li>CRM</li>
            <li>UTILITIES</li>
            <li>INSURANCE</li>
            <li>ASSETS</li>
            <li>MUTUAL</li>
            <li>RESEARCH</li>
            <li>TRANSACT ONLINE</li>
            <li>GOAL GPS</li>
            <li>FINANCIAL PLANNING</li>
            <li>WEALTH REPORT</li>
            <li>OTHER</li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
