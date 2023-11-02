import React from 'react'


export const Row = ({d}) => {
  return (
    <tr className=''>
        <td>{d}</td>
        <td><input className='rounded-sm m-2 text-black px-3' type='number' /></td>
        <td><input disabled value={'0'} className='rounded-sm m-2 px-3' type='number' /></td>
        <td>100%</td>
    </tr>
  )
}


const Section = ({data}) => {
    console.log(data)
  return (
    <div className='bg-blue-700 text-white rounded-xl m-2 p-8 '>
        <h3 className='text-2xl capitalize mb-4 text'>{data._name} <span className=' font-bold px-6 rounded-full'>  {data.name}</span></h3>
        <table className='table-auto'>
            <thead>
            <tr className='border-b-2 mb-2x bg-slate-500 '>
                <th>Title</th>
                <th>Numerator</th>
                <th>Denominator</th>
                <th>Percentage</th>
            </tr>
            </thead>
            <tbody>
            {
                data.fields.map((d)=><Row d={d} data={data} />)
            }
            </tbody>
        </table>
    </div>
  )
}

export default Section