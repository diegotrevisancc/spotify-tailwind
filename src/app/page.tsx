import Image from 'next/image';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, Shuffle, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a href="" className="flex items-center gap-3 text-xs fonsize={20} t-semibold text-zinc-200"><HomeIcon /> Home</a>
            <a href="" className="flex items-center gap-3 text-xs fonsize={20} t-semibold text-zinc-200"><Search />Search</a>
            <a href="" className="flex items-center gap-3 text-xs fonsize={20} t-semibold text-zinc-200"><Library />Your Library</a>
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
            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out!</strong>
              {/* pay atention at the space in group-hover, the correct is always without space like group-hover:bg-red-400, to avoid CSS conflicts */}
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button> 
            </a>
            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out!</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out!</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out!</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out!</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
              <Image src="/album_logo.png" alt="album cover" width={104} height={104}/>
              <strong>Wiped Out!</strong>
              <button className="invisible w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <Play fill='bg-black'/>
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-3xl mt-10">Made for Diego Trevisan</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album_logo.png" alt="album cover" width={120} height={120}/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">The Strokes, Arctic Monkeys, Daft Punk and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album_logo.png" alt="album cover" width={120} height={120}/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">The Strokes, Arctic Monkeys, Daft Punk and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album_logo.png" alt="album cover" width={120} height={120}/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">The Strokes, Arctic Monkeys, Daft Punk and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album_logo.png" alt="album cover" width={120} height={120}/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">The Strokes, Arctic Monkeys, Daft Punk and more</span>
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-md hover:bg-white/10 flex flex-col gap-2">
              <Image className="w-full" src="/album_logo.png" alt="album cover" width={120} height={120}/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-400">The Strokes, Arctic Monkeys, Daft Punk and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/album_logo.png" alt="album cover" width={56} height={56}/>
          <div className="flex flex-col">
            <strong className="font-normal">Ferrari</strong>
            <span className="text-xs text-zinc-400">The Neighbourhood</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play fill='bg-black'/>
            </button>
            
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-18 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer> {/* Multiply all numbers related to size by 4 */}
    </div>
  )
}
