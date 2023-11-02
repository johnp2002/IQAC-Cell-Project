import head from '../img/login/head.jpg'
export default function Header() {
    return (
      <div className="w-screen flex-row items-center justify-center ">
        <img className='saturate-0' src={head}/>
        <h1 className='w-screen text-2xl font-serif text-center p-3 bg-blue-200'>INTERNAL QUALITY ASSURENCE CELL</h1>
        <h1 className='w-screen text-2xl text-white text-center p-1 bg-blue-700'>welcome  to computer science  and  engineering department</h1>
      </div>
    )
  }