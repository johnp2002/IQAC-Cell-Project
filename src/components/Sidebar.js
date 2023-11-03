export default function Header() {
    return (
      <div className="max-w-xs p-3 ">
        <div onClick={()=>console.log('CLICKED MEE')} className="group hover:bg-slate-600 cursor-pointer mb-2 rounded-md p-4 bg-slate-400 ">
            <h2 className="mb-4 group-hover:text-white">Student</h2>
            <div className="w-40 h-5 p-0.5 rounded-full bg-white flex items-center justify-between" >
                <div className="w-1/2 h-full rounded-full bg-slate-400"></div>
                <p className="mx-2">6/10</p>
            </div>
        </div>
        <div onClick={()=>console.log('CLICKED MEE')} className="group hover:bg-slate-600 cursor-pointer mb-2 rounded-md p-4 bg-slate-400 ">
            <h2 className="mb-4 group-hover:text-white">R&D</h2>
            <div className="w-40 h-5 p-0.5 rounded-full bg-white flex items-center justify-between" >
                <div className="w-2/3 h-full rounded-full bg-slate-400"></div>
                <p className="mx-2">6/10</p>
            </div>
        </div>
        <div onClick={()=>console.log('CLICKED MEE')} className="group hover:bg-slate-600 cursor-pointer mb-2 rounded-md p-4 bg-slate-400 ">
            <h2 className="mb-4 group-hover:text-white">Alumini</h2>
            <div className="w-40 h-5 p-0.5 rounded-full bg-white flex items-center justify-between" >
                <div className="w-2/3 h-full rounded-full bg-slate-400"></div>
                <p className="mx-2">6/10</p>
            </div>
        </div>
        <div onClick={()=>console.log('CLICKED MEE')} className="group hover:bg-slate-600 cursor-pointer mb-2 rounded-md p-4 bg-slate-400 ">
            <h2 className="mb-4 group-hover:text-white">MOU</h2>
            <div className="w-40 h-5 p-0.5 rounded-full bg-white flex items-center justify-between" >
                <div className="w-2/3 h-full rounded-full bg-slate-400"></div>
                <p className="mx-2">6/10</p>
            </div>
        </div>
      </div>
    )
  }