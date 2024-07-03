import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { Box } from "~/libs/components/Box";
import Card from "~/libs/components/Card";
import { RecentListen } from "~/libs/components/Home/RecentListen/RecentListen";
import "~/style/home.css";

export default function Index() {
  const [currentBgColor, setCurrentBgColor] = useState({
    backgroundColor: "rgb(216, 16, 136)",
  });
  const [isSticky, setIsSticky] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleOnScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = event.currentTarget.scrollTop;

    setIsSticky(scrollTop > 0);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (scrollContainer && scrollThumbRef.current && scrollRef.current) {
        const scrollPercentage =
          scrollContainer.scrollTop /
          (scrollContainer.scrollHeight - scrollContainer.clientHeight);
        const thumbPosition =
          scrollPercentage *
          (scrollRef.current.clientHeight -
            scrollThumbRef.current.clientHeight);
        scrollThumbRef.current.style.transform = `translateY(${thumbPosition}px)`;
      }
    };

    scrollContainer &&
      scrollContainer?.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer &&
        scrollContainer?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollContainerRef]);

  useEffect(() => {
    const updateScrollThumbSize = () => {
      if (
        scrollContainerRef.current &&
        scrollThumbRef.current &&
        scrollRef.current
      ) {
        const scrollRatio =
          scrollContainerRef.current.clientHeight /
          scrollContainerRef.current.scrollHeight;
        const thumbHeight = scrollRatio * scrollRef.current.clientHeight;
        scrollThumbRef.current.style.height = `${thumbHeight}px`;
      }
    };

    updateScrollThumbSize();
    window.addEventListener("resize", updateScrollThumbSize);

    return () => {
      window.removeEventListener("resize", updateScrollThumbSize);
    };
  }, []);

  return (
    <Card className="pr-[0px] pl-[0px] overflow-hidden">
      <div className="home">
        <header className="main-header">
          <div
            className={`background-header ${isSticky && "show"}`}
            style={currentBgColor}
          ></div>
          <div className="flex justify-between w-full">
            <div className="flex gap-[8px]">
              <button className="btn icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[16px]"
                  viewBox="0 0 320 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </svg>
              </button>
              <button className="btn icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[16px]"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </button>
            </div>
            <div className="flex gap-[8px]">
              <button className="btn icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[16px]"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                </svg>
              </button>
              <div className="btn flex items-center justify-center">
                <span className="bg-[#509bf5] text-[#000] flex items-center justify-center h-[24px] w-[24px] rounded-[50%]">
                  F
                </span>
              </div>
            </div>
          </div>
        </header>
        <div>
          <div>
            <div className="home-scroll-container">
              <div
                className="home-scroll max-h-[608px] relative z-[2]"
                ref={scrollContainerRef}
                onScroll={handleOnScroll}
              >
                <div className="h-[64px] sticky top-0"></div>
                <div>
                  <main>
                    <div
                      className="main-background"
                      style={currentBgColor}
                    ></div>
                    <div className="sticky top-[64px] z-[2]">
                      <div
                        className={`tag-background ${isSticky && "show"}`}
                        style={currentBgColor}
                      ></div>
                      <div className="flex items-center h-[56px] px-[21.5px]">
                        <div>
                          <div className="flex gap-[8px] text-[14px]">
                            <div>
                              <span className="tag tag--active">All</span>
                            </div>
                            <div>
                              <span className="tag">Music</span>
                            </div>
                            <div>
                              <span className="tag">Podcasts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <RecentListen setCurrentBgColor={setCurrentBgColor} />
                    <section className="relative z-[1] px-[21.5px]">
                      <div>
                        <div className="shelf-header">
                          <div className="flex-1">
                            <h2 className="text-[24px] font-bold hover-underline">
                              Made for you
                            </h2>
                          </div>
                          <Link to="">
                            <span className="inline-block text-[14px] font-bold hover-underline mb-[8px] ml-[8px]">
                              Show all
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="grid-container">
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                      </div>
                    </section>
                  </main>
                </div>
              </div>
              <div className="custom-scrollbar" ref={scrollRef}>
                <div className="scroll-thumb" ref={scrollThumbRef}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
