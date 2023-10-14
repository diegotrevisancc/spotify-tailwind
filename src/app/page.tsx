import Image from 'next/image'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight} from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200"><HomeIcon /> Home</a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200"><Search />Search</a>
            <a href="" className="flex items-center gap-3 text-xs font-semibold text-zinc-200"><Library />Your Library</a>
          </nav>
          <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 1</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 2</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 3</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 4</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 5</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 6</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 7</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 8</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 9</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 10</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 11</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 12</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 13</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 14</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 15</a>
          </nav>
        </aside>
        <main className="flex-1 p-6"><div className='flex items-center gap-3'>
          <button>
            <ChevronLeft />
          </button>
          <button>
            <ChevronRight />
          </button>
          </div></main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">footer</footer> {/* Multiply all numbers related to size by 4 */}
    </div>
  )
}
