"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Users,
  Upload,
  Zap,
  Plus,
  Settings,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    name: "Patient Twin",
    href: "/patient",
    icon: Users,
  },
  {
    name: "Upload Lab Report",
    href: "/upload",
    icon: Upload,
  },
  {
    name: "Simulation",
    href: "/simulation",
    icon: Zap,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-48 border-r border-gray-200 bg-white flex flex-col">
      {/* Logo */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
            ⚕
          </div>

          <div>
            <h1 className="text-sm font-bold text-gray-900">TwinMind</h1>
            <p className="text-xs text-gray-500">Healthcare AI</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-3 py-6">
        {navigation.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? "border-l-2 border-blue-600 bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* CTA */}
      <div className="px-3 pb-6">
        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700">
          <Plus size={18} />
          New Twin Analysis
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 px-3 py-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50">
          <Settings size={20} />
          About TwinMind
        </button>
      </div>
    </aside>
  );
}