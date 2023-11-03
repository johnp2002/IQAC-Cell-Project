import Header from './components/Header'
import Sidebar from './components/Sidebar'
import data from './data/data (1).json'
import Section from './components/Section'
import Auth from './components/Auth'
import Dept from './components/Dept'
export default function App() {
  return (
    <div className="w-screen h-screen box-border overflow-x-hidden font-sans">
      <Header/>
      <Dept dept={"Computer science and Engineering"}/>
      <Auth/>
      {false && <div className='flex'>
        <Sidebar/>
        <div className='flex-1'>
          {

            data.map((d)=><Section data={d}/>)
            
          }
        </div>
      </div>}
    </div>
  )
}