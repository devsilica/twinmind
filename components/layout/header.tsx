"use client";

import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="fixed left-48 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      {/* Search */}
      <div className="max-w-md flex-1">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search patients, simulations, reports..."
            className="w-full rounded-lg border border-gray-200 bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="ml-8 flex items-center gap-6">
        {/* Notifications */}
        <button className="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">
              Dr. Sarah L.
            </p>

            <p className="text-xs text-gray-500">
              ONCOLOGY SPECIALIST
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-pink-400 font-semibold text-white">
            SL
          </div>
        </div>
      </div>
    </header>
  );
}