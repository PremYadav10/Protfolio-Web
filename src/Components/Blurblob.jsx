import React from 'react'
import propType from 'prop-types'

function Blurblob({position,size}) {
    const {top, left} = position;
    const {width, height} = size;

  return (
    <div 
    className='absolute'
    style={{
        top:top,
        left:left,
        width:width,
        height:height,
        transform:'translate(-50%,-50%)',
    }}
    >
        <div className='w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob'
        ></div>
    </div>
  )
};

//Define proptypes
Blurblob.propType={
    position:propType.shape({
        top:propType.string,
        left : propType.string
    }),
    size:propType.shape({
        width:propType.string,
        height:propType.string,
    }),
};

export default Blurblob;