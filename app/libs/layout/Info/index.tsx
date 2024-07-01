import { useRef } from "react";
import Card from "~/libs/components/Card";
import "~/style/info.css";

export default function Info() {
  const infoHeaderRef = useRef<HTMLDivElement>(null);

  const handleOnScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = (event.target as HTMLDivElement).scrollTop;
    if (scrollTop > 0) {
      infoHeaderRef.current?.classList.add("box-shadow");
    } else {
      infoHeaderRef.current?.classList.remove("box-shadow");
    }
  };

  return (
    <Card className="pr-[0] pl-[0] overflow-hidden">
      <div className="pt-[16px] ">
        <div className="info-heading h-[48px] pl-[16px]" ref={infoHeaderRef}>
          <div className="flex justify-between items-center">
            <h2 className="capitalize font-semibold">Nothing like us</h2>
            <div className="flex items-center gap-[10px]">
              <span className="icon hover icon-ellipsis">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                </svg>
              </span>
              <div className="icon-close2">
                <span className="icon hover">
                  <svg
                    className="h-[14px] w-[14px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="info-content flex flex-col gap-[16px] pl-[16px] info-scroll"
          onScroll={handleOnScroll}
        >
          <div className="info-img flex justify-center">
            <img
              className="h-[333px] w-[100%] rounded-[8px]"
              src="https://i.scdn.co/image/ab67616d0000b273892e9f9e3ad986310334a3d7"
              alt="info-img"
            />
          </div>
          <div className="info-song">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[24px] font-bold capitalize">
                  Nothing like us
                </h3>
                <div className="font-medium">Justin Bieber</div>
              </div>
              <div>
                <div className="flex hover relative h-[24px] w-[24px] rounded-[50%] border-2 cursor-pointer border-solid text-[24px] icon-plus">
                  <span className="absolute top-[-9px] left-[2px]"> +</span>
                </div>
              </div>
            </div>
          </div>
          <div className="info-artist rounded-[8px]">
            <div className="artist-img relative">
              <img
                className="rounded-t-[8px]"
                src="https://i.scdn.co/image/ab6761670000ecd470ebb9de96b4fa4811486415"
                alt="artist-img"
              />
              <h4 className="absolute top-[16px] left-[16px] text-[16px] font-semibold">
                About the artist
              </h4>
            </div>
            <div className="artist-song_info p-[16px]">
              <h5 className="capitalize font-bold">Justin Bieber</h5>
              <div className="flex items-center justify-between pt-[8px] pb-[12px]">
                <div>74,202,945 monthly listeners</div>
                <div>
                  <span className="font-semibold text-[14px] cursor-pointer text-cyan-50 border border-[#878787] rounded-[20px] px-[15px] py-[4px]">
                    Follow
                  </span>
                </div>
              </div>
              <div className="artist-description">
                <p>
                  Justin's recent album JUSTICE includes the chart-topping
                  global smashes "Peaches feat. Daniel Caesar & Giveon", “Holy”
                  feat. Chance The Rapper, “Lonely” feat. Benny Blanco,
                  “Anyone,” and “Hold On." The album also features guest
                  appearances from The Kid LAROI, Dominic Fike, Khalid, Beam,
                  Burna Boy, Lil Uzi Vert, Jaden, Quavo + more. The JUSTICE
                  campaign has reasserted Justin’s dominance as a live
                  performer; from his triumphant return to the live stage with
                  his T-Mobile-sponsored NYE livestream concert, to his record
                  breaking TikTok performance “Journals Live” to his stunning
                  AR-assisted performance for Spotify, to his epic Nickelodeon
                  Kids' Choice Awards set and this week’s blockbuster NPR Tiny
                  Desk Concert, Justin has delivered undeniable, show stopping
                  performances. Along the way, Justin has appeared as musical
                  guest twice on Saturday Night Live, performed on The American
                  Music Awards, The People’s Choice Awards, and much more. With
                  over 86 billion career streams and over 78 million albums sold
                  worldwide, Justin Bieber continues to reign as one of the
                  biggest artists in the world. Bieber is the #1 artist on
                  Spotify with over 75 million monthly listeners!
                </p>
              </div>
            </div>
          </div>
          <div className="info-credits rounded-[8px] p-[16px] flex flex-col gap-[12px]">
            <div className="flex justify-between">
              <h4 className="capitalize font-bold">Credits</h4>
              <div className="font-bold text-[14px]">Show all</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h5>Justin Bieber</h5>
                <div className="text-[14px]">
                  <p>Main Artist, Composer, Producer</p>
                </div>
              </div>
              <div>
                <span className="font-semibold text-[14px] cursor-pointer text-cyan-50 border border-[#878787] rounded-[20px] px-[15px] py-[4px]">
                  Follow
                </span>
              </div>
            </div>
            <div>
              <h5>Josh Gudwin</h5>
              <div className="text-[14px]">
                <p>Producer</p>
              </div>
            </div>
          </div>

          <div className="queue rounded-[8px] p-[16px] flex flex-col gap-[12px]">
            <h4 className="font-bold">Your queue is empty</h4>
            <div>
              <span className="font-bold text-[14px] cursor-pointer text-cyan-50 border border-[#878787] rounded-[20px] px-[15px] py-[4px]">
                Search for something new
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
