import {React,useState,useEffect} from 'react';
import Image from './Image';
import axios from  'axios';
export default function Lazyloadimages(){
    const [images,setImages]=useState([])

    function fetchimages(){
          axios.get('http://localhost:80/fetchimages',{withCredentials:true})
          .then(res=>{
              setImages(res.data.data);
          }).catch(err=>{
         console.log(err)
          })
      }

   useEffect(()=>{
    fetchimages();
   },[])



    return(
        <>
        <div className='images'>
        <Image images={images}/>
        </div>
        </>
    )
}