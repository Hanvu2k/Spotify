import { Link } from "@remix-run/react";
import { IconPlay } from "../IconPlay";
import "~/style/box.css";

export const Box = () => {
  return (
    <div className="p-[12px] box flex gap-[8px] flex-col">
      <div>
        <div className="relative">
          <img
            className="rounded-[6px]"
            src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b27336adcea4e93245f1fec547df/5/en/default"
            alt="img"
          />
          <IconPlay className="icon-play-box" />
        </div>
      </div>
      <div className="flex items-center gap-[12px]">
        <div className="flex flex-col gap-[4px] items-start">
          <Link to="">
            <h5 className="text-[14px] font-medium">Daily Mix</h5>
          </Link>
          <div className="text-[14px]">
            <p>AOA, 2NE1, Girls{`'`} Generation and more</p>
          </div>
        </div>
      </div>
    </div>
  );
};
