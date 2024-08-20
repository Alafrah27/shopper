import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Musdar_Online
        </span>
      </Navbar.Brand>

      <div className="flex justify-center items-center md:order-2 gap-3">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="ali.jpg"
              rounded
              className="object-cover"
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Ali Edris</span>
            <span className="block truncate text-sm font-medium">
              almusderthafa@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <Link to="/login">SignIn</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Navbar.Brand href="/register">Register</Navbar.Brand>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
        <div>
          <TiShoppingCart className="font-bold text-[30px] cursor-pointer " />
        </div>
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Phones</Navbar.Link>
        <Navbar.Link href="#">Laptop</Navbar.Link>
        <Navbar.Link href="#">mens</Navbar.Link>
        <Navbar.Link href="#">kids</Navbar.Link>
        <Navbar.Link href="#">womens</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
