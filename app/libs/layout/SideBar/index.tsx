import { Link, useLocation } from "@remix-run/react";
import Card from "../../components/Card";
import Playlist from "./Playlist";
import { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const { pathname } = location;

  const width = {
    width: isOpen ? "364px" : "72px",
  };

  return (
    <div className="side-bar flex gap-[8px] flex-col" style={width}>
      <Card>
        <Link
          to="/"
          className={`flex items-center  px-[12px] py-[4px] min-h-[40px] hover ${
            isOpen ? "gap-[10px]" : "justify-center"
          }  ${pathname === "/" && "active"}`}
        >
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </div>
          {isOpen && <div>Home</div>}
        </Link>
        <Link
          to={"/search"}
          className={`flex items-center  px-[12px] py-[4px] min-h-[40px] hover ${
            isOpen ? "gap-[10px]" : "justify-center"
          } ${pathname === "/search" && "active"}`}
        >
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
          {isOpen && <div>Search</div>}
        </Link>
      </Card>
      <Playlist isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
