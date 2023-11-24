import { Link } from "react-router-dom";


const SignInFrom = () => {
  return (
    <>
      <div className="text-black">
        <div className="font-semibold mb-4">SignInFrom</div>
        <Link to='/' className="p-3 bg-red-400 rounded font-semibold">Home</Link>
      </div>
    </>
  );
};

export default SignInFrom;