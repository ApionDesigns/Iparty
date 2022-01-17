
export default function footer() {
  return (
    <div className="w-full h-full block lg:hidden">
	    <div id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow text-black border">
		    <div id="tabs" className="flex justify-between">
		    	<a href="/" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
			    </a>
          <a href="new" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
			    <a href="search" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
				    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
			    </a>
			    <a href="#" className="w-full focus:text-blue-500 hover:text-blue-500 justify-center inline-block text-center pt-2 pb-1">
				    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mb-1 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
		    	</a>
		    </div>
    	</div>
    </div>
  )
}