import {React} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from './Loader';

export default function Image({images}){
  const body=images.map((image)=>{
      const {imagelink,description}=image;
      return  (
      <div className='image' key={description}>
          <LazyLoadImage
          height='50vh'
          width='50vw'
          placeholderSrc={<Loader/>}
          effect='blur'
          src={imagelink}
           alt={description}/>
      </div>
      )
  })


    return(
        <>
            {body}
        </>
    )
}