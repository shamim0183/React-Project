import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="font-bold text-red-500 text-center mb-4">Home</div>
      <div className="flex items-center gap-3 justify-center">
        
        <Button className='bg-red-50 text-black hover:text-white'>
          <Link to='/'>Home</Link>
        </Button>
        <Button className='bg-red-50 text-black hover:text-white'>
          <Link to='/sign-in'>Sign In</Link>
        </Button>
        <Button className='bg-red-50 text-black hover:text-white'>
          <Link to='/sign-up'>Sign Up</Link>
        </Button>
      </div>
      <p className="text-left font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam laudantium reprehenderit excepturi aliquam voluptas corrupti, laborum magnam similique quaerat ratione? Corrupti molestiae impedit perspiciatis quas ipsam, odio cumque vitae temporibus accusantium tempore delectus minus obcaecati, ad labore molestias. Minus impedit unde tenetur sed eaque inventore officia animi cumque totam.</p>
    </>
  )
}

export default Home