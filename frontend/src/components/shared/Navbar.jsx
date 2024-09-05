import React from "react";
import { User, LogOut } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger} from "../ui/popover.jsx";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar.jsx";
import { Button, buttonVariants } from "../ui/button.jsx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          {
            !user?(
                <div className ='flex items-center gap-2'>
                    <Link to ="/login"><Button variant = "outline">Login</Button></Link>
                    <Link to = "/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
                    
                </div>
            ):(
                <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="">
              <div className="flex gap-4 space-y-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
                <div>
                    <h4 className="font-medium">Sivaranjani</h4>
                    <p className="text-sm textmuted-foreground">Lorem ipsum dolor sit amet.</p>
                </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                    
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User/>
                    <Button variant="link">View profile</Button>
                    </div>

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut/>
                    <Button variant="link">Logout</Button>
                    </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
            )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;