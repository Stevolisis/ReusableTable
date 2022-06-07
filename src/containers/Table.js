import {React} from 'react'

export default function Table({title,headings,datas,searchtItem,setSearchtItem,order,setOrder}){


   const heads=headings.map((head,i)=>{
    return <th key={i}>{head}</th>
})

   const body=datas.filter((data)=>{
       //const columns=["name"]
       if(searchtItem===""){
           return data
       }else if(order.some((column)=>data[column].toString().toLowerCase().includes(searchtItem.toLowerCase()))){
           return data
       }
    }).map((data,i)=>{
       const {name,stack,state,country,company,experience}=data;
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
        onChange={(e)=>setSearchtItem(e.target.value)}/>
        <select onChange={(e)=>setOrder([e.target.value])}>
           <option value='name' >Name</option>
           <option value='stack'>Stack</option>
           <option value='state'>State</option>
           <option value='country'>Country</option>
           <option value='company'>Company</option>
           <option value='experience'>Years of experience</option>
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