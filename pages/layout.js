import { useAmp } from 'next/amp'
export const config = { amp: 'hybrid' }

const layout=()=>{
  return (
    <div>
      <h3>My AMP Page</h3>
      {useAmp() ? (
        <amp-img
          width="300"
          height="300"
          src="https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-600x600.jpg"
          alt="a cool image"
          layout="responsive"
        />
      ) : (
        <img width="500" height="300" src="https://cdn.tgdd.vn/Products/Images/42/179530/samsung-galaxy-s10-plus-black-600x600.jpg" alt="a cool image" 
        layout="responsive"
        />
      )}
      
    </div>
  )
}

export default layout;