import {React} from 'react'
import { SpinnerCircular } from 'spinners-react';

export default function Loader(){

    return(
        <>
        <div className='loadercon'>
         <div className='loader'>
         <SpinnerCircular 
         size='50px'
         thickness='200'
         color='#0D3EA8'
         secondaryColor='#051B30'
         speed='220'
         enabled= 'true'
         />
         </div>
        </div>
        </>
    )
}