import { ClipLoader } from 'react-spinners'

const override = {
    display : 'block',
    margin : '100px auto'
}


const Spinner = ({loading}:any) => {
  return (
    <div className='h-screen bg-white'>
        <ClipLoader
   color='#4338ca'
   loading = {loading}
   cssOverride = {override}
   size = {150}
   />
    </div>
  )
}

export default Spinner