import {React} from 'react'

export default function Table({title,headings,datas2,searchtItem2,setSearchtItem2,setOrder2}){

   const heads=headings.map((head,i)=>{
    return <th key={i}>{head}</th>
})

   const body=datas2.map((val,i)=>{
       const {name,stack,state,country,company,experience}=val;
       return (
           <tr key={i}>
               <td>{i+1}</td>
               <td>{name}</td>
               <td>{stack}</td>
               <td>{state}</td>
               <td>{country}</td>
               <td>{company}</td>
               <td>{experience}</td>
           </tr>
       )
   })
    return(
        <>
    <div className='tableholder'>
    <div className='header'><h2>{title}</h2></div>

    <div className='filters'>
    <div className='filter'>
        <input type='text' placeholder='Search Employees'
        onChange={(e)=>setSearchtItem2(e.target.value)}/>

        <select onChange={(e)=>setOrder2([e.target.value])}>
           <option value='name' >Name</option>
           <option value='stack'>Stack</option>
           <option value='state'>State</option>
           <option value='country'>Country</option>
           <option value='company'>Company</option>
       </select>
        </div>
</div>
<div className='main'>
    
<div className='scroll'>



<table>
    <thead>
<tr>{heads}</tr>
</thead>
<tbody>
{body}
</tbody>

</table>

</div>

</div>

    </div>

        </>
    )
}