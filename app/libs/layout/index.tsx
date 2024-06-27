import React, { useState } from "react";
import SideBar from "./SideBar";
import Info from "./Info";
import { LayoutProps } from "~/domain/entities/Layout/layout.entity";
import { Link } from "@remix-run/react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="layout">
      <div className="wrapper">
        <SideBar />
        {children}
        <Info />
      </div>
      <div className="footer justify-between items-center">
        <div className="playing-bar px-[8px]">
          <div className="flex items-center gap-[16px]">
            <div className="img-song">
              <img src="" alt="" />
            </div>
            <div>
              <Link to="" className="text-white text-[14px] font-semibold">
                Mình là gì của nhau
              </Link>
              <div className="text-[12px] font-normal">Lou Hoàng</div>
            </div>
            <div>
              <div className="add-icon">
                <span>+</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center justify-center gap-[4px] h-full">
            <div className="flex gap-[16px] items-center">
              <button className="icon icon-mix">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"></path>
                </svg>
              </button>
              <button className="icon icon icon-back">
                <svg
                  className="h-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z" />
                </svg>
              </button>
              <button className="icon icon icon-play">
                <svg
                  className="h-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>
              </button>
              <button className="icon icon icon-next">
                <svg
                  className="h-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z" />
                </svg>
              </button>
              <button
                onClick={() => handleActive()}
                className={
                  isActive
                    ? "icon icon icon-loop active-icon"
                    : "icon icon icon-loop"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M24,128A72.08,72.08,0,0,1,96,56H204.69L194.34,45.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L204.69,72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H51.31l10.35-10.34a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L51.31,200H160a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z"></path>
                </svg>
              </button>
            </div>
            <div className="playing-time flex items-center gap-[6px]">
              <div className="text-[12px]">0:00</div>
              <div className="time-line">
                <div className="time-line_running"></div>
                <div className="time-line_length"></div>
              </div>
              <div className="text-[12px]">1:00</div>
            </div>
          </div>
          <div>
            <div className="flex justify-end">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
