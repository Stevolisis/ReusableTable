import  {React,useState,useEffect,lazy,Suspense} from 'react';
import {Link} from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary'
import Table2 from './Table2';
import axios from 'axios'
import "../styles/table.scss"
import ErrorFallback from './ErrorBoundary';
const Table=lazy(()=>import('./Table'));


export default function Tablecon(){
    const [datas,setDatas]=useState([])
    const [order,setOrder]=useState(["name"]);
    const [order2,setOrder2]=useState("name");
    const [searchtItem,setSearchtItem]=useState("");
    const [datas2,setDatas2]=useState([])
    const [searchtItem2,setSearchtItem2]=useState("")

    function fetchinfo(){
        //axios.get('https://client.stephcom.com.ng/fetchinfo',{headers:{"Access-Control-Allow-Origin":"*"}})
       axios.get('http://localhost:80/fetchinfo',{headers:{"Access-Control-Allow-Origin":"*"}})
        .then(res=>{
            setDatas(res.data.data);
        }).catch(err=>{
       console.log(err)
        })
    }

    
    function fetchinfo2(){
     //  axios.get(`https://client.stephcom.com.ng/fetchinfo2?filter=${searchtItem2}&order=${order2}`)

     axios.get(`http://localhost:80/fetchinfo2?filter=${searchtItem2}&order=${order2}`)
        .then(res=>{
            setDatas2(res.data.data);
        //    console.log(res.data.data)

        }).catch(err=>{
       console.log(err)
        })
    }


    useEffect(()=>{
        fetchinfo();
    },[])

    
    useEffect(()=>{
        fetchinfo2();
    },[searchtItem2,order2]);

    return (
        <>
        <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={()=>{}}
        >
<Suspense fallback={<div>...Loading</div>}>
        <Table 
        title='Employees Info'
        headings={["id","Name","Stack","State","Country","Company","Years of Experience"]}
        datas={datas}
        order={order}
        setOrder={setOrder}
        setSearchtItem={setSearchtItem}
        searchtItem={searchtItem}
        />
</Suspense>
</ErrorBoundary>

<Table2 
        title='Employees Info Searched from Backend'
        headings={["id","Name","Stack","State","Country","Company","Years of Experience"]}
        datas2={datas2}
        order2={order2}
        setOrder2={setOrder2}
        setSearchtItem2={setSearchtItem2}
        searchtItem2={searchtItem2}
        />

        <div data-testid='image'>images</div>

     <Link style={{textDecoration:'none'}} to='/images'>Images</Link>


  <div style={{padding:'30px',textAlign:'center'}}>
   <Link style={{textDecoration:'none'}} to='/test'>Test</Link>
   </div>      

        </>
    )
}