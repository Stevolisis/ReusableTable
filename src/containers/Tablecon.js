import {React,useState,useEffect} from 'react';
import Table from './Table';
import Table2 from './Table2';
import axios from 'axios'
import "../styles/table.scss"

export default function Tablecon(){
    const [datas,setDatas]=useState([])
    const [order,setOrder]=useState(["name"]);
    const [order2,setOrder2]=useState("name");
    const [searchtItem,setSearchtItem]=useState("");
    const [datas2,setDatas2]=useState([])
    const [searchtItem2,setSearchtItem2]=useState("")

    function fetchinfo(){
        axios.get('https://client.stephcom.com.ng/fetchinfo')
        .then(res=>{
            setDatas(res.data.data);
        }).catch(err=>{
       console.log(err)
        })
    }

    
    function fetchinfo2(){
       axios.get(`https://client.stephcom.com.ng/fetchinfo2?filter=${searchtItem2}&order=${order2}`)

      //  axios.get(`http://localhost:80/fetchinfo2?filter=${searchtItem2}&order=${order2}`)
        .then(res=>{
            setDatas2(res.data.data);
            console.log(res.data.data)

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

        <Table 
        title='Employees Info'
        headings={["id","Name","Stack","State","Country","Company","Years of Experience"]}
        datas={datas}
        order={order}
        setOrder={setOrder}
        setSearchtItem={setSearchtItem}
        searchtItem={searchtItem}
        />

<Table2 
        title='Employees Info Searched from Backend'
        headings={["id","Name","Stack","State","Country","Company","Years of Experience"]}
        datas2={datas2}
        order2={order2}
        setOrder2={setOrder2}
        setSearchtItem2={setSearchtItem2}
        searchtItem2={searchtItem2}
        />

      

        </>
    )
}