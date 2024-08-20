import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center  backdrop-blur-2xl h-full w-full my-10 flex-1  mx-auto overflow-x-hidden ">
      <form className="flex max-w-md flex-col gap-4 w-full" >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="text"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Enter password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
         
            I agree with the&nbsp;
          
         
        </div>
        <Button type="submit">Register new account</Button>
        <Link
              to="/login"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Already I have an Account ?{" "}
              <span className="text-blue-600 hover:text-blue-800">Login</span>
            </Link>
      </form>
    </div>
  );
}
export default Register;
