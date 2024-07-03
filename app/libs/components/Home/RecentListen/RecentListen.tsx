import IconBar from "../../IconBar";
import { IconPlay } from "../../IconPlay";

interface RecentListenProps {
  setCurrentBgColor: React.Dispatch<
    React.SetStateAction<{ backgroundColor: string }>
  >;
}

export const RecentListen = ({ setCurrentBgColor }: RecentListenProps) => {
  const fakeData = [
    {
      id: 1,
      title: "This is Justin Bieber",
      isPlaying: true,
      bgcolor: "rgb(216, 16, 136)",
      img_url:
        "https://i.scdn.co/image/ab67706f000000029cf2e21a96f217de5d3abf60",
    },
    {
      id: 2,
      title: "Day Mix 1",
      isPlaying: false,
      bgcolor: "red",
      img_url:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb36db9b8785bc9393149f0078/5/en/default",
    },
    {
      id: 3,
      title: "Day Mix 2",
      isPlaying: false,
      bgcolor: "green",
      img_url:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb9c9e23c646125922719489e/3/en/default",
    },
    {
      id: 4,
      title: "Day Mix 3",
      isPlaying: false,
      bgcolor: "blue",
      img_url:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/6TITnFVRcl0AcZ4syE7Toe/en/default",
    },
    {
      id: 5,
      title: "Day Mix 4",
      isPlaying: false,
      bgcolor: "purple",
      img_url:
        "https://dailymix-images.scdn.co/v2/img/ab67616d0000b27336adcea4e93245f1fec547df/4/en/default",
    },
    {
      id: 6,
      title: "Day Mix 5",
      isPlaying: false,
      bgcolor: "#6e2020",
      img_url:
        "https://i.scdn.co/image/ab67706f000000029cf2e21a96f217de5d3abf60",
    },
    {
      id: 7,
      title: "Day Mix 6",
      isPlaying: false,
      bgcolor: "#1f8073",
      img_url:
        "https://dailymix-images.scdn.co/v2/img/ab67616d0000b27336adcea4e93245f1fec547df/4/en/default",
    },
    {
      id: 8,
      title: "Day Mix 7",
      isPlaying: false,
      bgcolor: "#c45858",
      img_url:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb36db9b8785bc9393149f0078/5/en/default",
    },
  ];

  const handleHover = (item: {
    id: number;
    title: string;
    bgcolor: string;
    img_url: string;
    isPlaying: boolean;
  }) => {
    setCurrentBgColor({
      backgroundColor: item.bgcolor,
    });
  };

  const handleMouseLeave = () => {
    const playingItem = fakeData.find((item) => item.isPlaying);
    setCurrentBgColor({
      backgroundColor: playingItem ? playingItem.bgcolor : "",
    });
  };

  return (
    <section className="relative z-[1] px-[21.5px] pt-[8px] mb-[16px]">
      <div>
        <section className="recent-container">
          <div className="recent-listen">
            {fakeData.length > 0 &&
              fakeData.map((item) => {
                return (
                  <div
                    className="recent-listen_item"
                    key={item.id}
                    onMouseOver={() => handleHover(item)}
                    onFocus={() => handleHover(item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex w-full">
                      <div className="recent-listen_item-img">
                        <img
                          className="rounded-l-[4px]"
                          src={item.img_url}
                          alt={item.title}
                        />
                      </div>
                      <div className="flex items-center justify-between  flex-1 pl-[8px]">
                        <div className="text-[14px] font-bold text-white">
                          {item.title}
                        </div>
                        {item.isPlaying && (
                          <div className="pr-[16px]">
                            <IconBar />
                          </div>
                        )}
                        <IconPlay
                          isPlay={item.isPlaying}
                          className="icon-play-recent"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </section>
  );
};
