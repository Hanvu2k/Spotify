import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import "~/style/playList.css";

interface PlaylistProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Playlist({ isOpen, setIsOpen }: PlaylistProps) {
  const [isShow, setIsShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const playlistHeaderRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [isClear, setIsClear] = useState(false);
  const playlist = [1];

  const handleShowInput = () => {
    setIsShow(true);
  };

  const handleSearchPlaylistChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsClear(true);
    setSearchValue(event.target.value);
  };

  const handleCloseSearch = () => {
    setSearchValue("");
    setIsClear(false);
  };

  const handleOnScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = (event.target as HTMLDivElement).scrollTop;
    if (scrollTop > 0) {
      playlistHeaderRef.current?.classList.add("box-shadow");
    } else {
      playlistHeaderRef.current?.classList.remove("box-shadow");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        closeButtonRef.current &&
        !closeButtonRef.current.contains(event.target as Node) &&
        !searchValue
      ) {
        setIsClear(false);
        setIsShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchValue]);

  useEffect(() => {
    if (!searchValue) {
      setIsClear(false);
    }
  }, [searchValue]);

  return (
    <Card
      className={
        isOpen
          ? "pl-[12px] pr-0 overflow-hidden"
          : "pl-[0] pr-0 overflow-hidden"
      }
    >
      <div className="min-h-[496px]">
        <div ref={playlistHeaderRef}>
          <div className="px-[16px] py-[8px]">
            <div
              className={`flex items-center  leading-[40px] ${
                isOpen ? "gap-[8px]" : "justify-center"
              } `}
            >
              <div className={`flex ${isOpen && "flex-1"}`}>
                <button
                  className="flex font-semibold items-center hover"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span
                    className={`icon  ${
                      isOpen ? "mr-[12px]" : "toggle-playlist--active"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z" />
                    </svg>
                  </span>
                  {isOpen && "Your Library"}
                </button>
              </div>
              {isOpen && (
                <>
                  <button className="icon hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-[16px] w-[16px]"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                    </svg>
                  </button>
                  <button className="icon hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-[16px] w-[16px]"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
          {isOpen && !searchValue && (
            <div className="flex gap-[8px] py-[8px]">
              <span className="legacy text-[14px] inline-flex px-[12px] py-[4px] rounded-[20px] leading-[24px] items-center font-medium">
                Playlist
              </span>
              <span className="legacy text-[14px] inline-flex px-[12px] py-[4px] rounded-[20px] items-center leading-[24px] font-medium">
                Artists
              </span>
            </div>
          )}
        </div>
        <div
          className={`playlist-scroll ${
            isOpen
              ? searchValue
                ? "max-h-[440px] min-h-[440px]"
                : "max-h-[392px] min-h-[392px]"
              : "max-h-[460px]"
          }`}
          onScroll={handleOnScroll}
        >
          {isOpen && (
            <div className="flex justify-between items-center">
              <div className="relative py-[8px]">
                <button
                  className={` absolute icon icon-search hover z-10 left-[2px] ${
                    isShow ? "icon-disabled top-[14%] " : " top-[10%]"
                  } `}
                  onClick={() => handleShowInput()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </button>
                <input
                  className={`search-input text-[14px] font-medium ${
                    isShow && "show"
                  }`}
                  type="text"
                  ref={inputRef}
                  value={searchValue}
                  onChange={handleSearchPlaylistChange}
                  placeholder="Search in your library"
                />
                <button
                  ref={closeButtonRef}
                  className={`icon hover absolute top-[30%] right-[2px] z-10 ${
                    isClear ? "icon-close--show" : "icon-close"
                  }`}
                  onClick={handleCloseSearch}
                >
                  <svg
                    className="h-[14px] w-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                  </svg>
                </button>
              </div>
              <div>
                <div className="flex items-center gap-[5px] px-[12px] py-[4px] hover">
                  <div>Recent</div>
                  <span className="icon  flex items-center">
                    <svg
                      className="h-[16px] w-[16px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="search-result">
            {isOpen && searchValue && playlist?.length === 0 ? (
              <div className="flex flex-col justify-center items-center text-center gap-[16px] p-[16px] h-[360px]">
                <div className="text-[16px] font-medium">
                  Couldn&apos;t find &quot;{searchValue}&quot;
                </div>
                <div className="text-[14px] font-normal">
                  <p>
                    Try searching again using a different spelling or keyword.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div
                  className={`result-item flex p-[8px] ${
                    isOpen ? "gap-[8px]" : "justify-center pr-[0px"
                  }`}
                >
                  <div>
                    <div className="img-playlist"></div>
                  </div>
                  {isOpen && (
                    <div className="text-[16px] ">
                      <p className="font-medium">Liked Songs</p>
                      <div>
                        <span className="text-[14px]">Playlist . 11 songs</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
