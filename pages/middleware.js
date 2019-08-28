import React from 'react';

import Cors from 'micro-cors'

const cors = Cors({
  allowedMethods: ['GET', 'HEAD'],
})

const Endpoint=(req, res)=>{
    
    return(
        // res.json({ message: 'Hello Everyone!' })
        res.json({ message: 'Hello Everyone!' })
        )
  
}

export default Endpoint