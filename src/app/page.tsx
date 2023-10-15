import Image from 'next/image';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play} from 'lucide-react';

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
          <nav className="mt-6 pt-10 border-t border-zinc-0 flex flex-col gap-3">
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
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
          </div>
          
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out</strong>
              {/* pay atention at the space in group-hover, the correct is always without space like group-hover:bg-red-400, to avoid CSS conflicts */}
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button> 
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-0 border-t border-zinc-700 p-6">footer</footer> {/* Multiply all numbers related to size by 4 */}
    </div>
  )
}
