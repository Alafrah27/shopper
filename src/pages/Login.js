import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center  backdrop-blur-2xl h-full w-full flex-1  mx-auto overflow-x-hidden my-10">
      <form className="flex max-w-md flex-col gap-4 w-full">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow  placeholder="Enter your Password" />
        </div>

        <Button type="submit">Login</Button>
        <Link
          to="/register"
          className="text-cyan-600 hover:underline dark:text-cyan-500 decoration-none "
        >
          Already I have an Account ?{" "}
          <span className="text-blue-600 hover:text-blue-800">register</span>
        </Link>
      </form>
    </div>
  );
}

export default Login;
