import { CSSProperties, useEffect, useState } from "react";

export default function Audio() {
  const [status, setStatus] = useState("full");
  const [volume, setVolume] = useState(100);
  const [currentVol, setCurrentVol] = useState(100);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleDocumentMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mouseup", handleDocumentMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleDocumentMouseUp);
    };
  }, []);

  const toggleStatus = () => {
    if (status === "mute") {
      if (volume === 0) {
        setStatus("full");
        setVolume(100);
      }

      if (currentVol > 70) {
        setStatus("full");
        setVolume(currentVol);
      }

      if (currentVol < 70 && currentVol !== 0) {
        setStatus("low");
        setVolume(currentVol);
      }
    }

    if (status === "low" || status === "full") {
      setStatus("mute");
      setVolume(0);
    }
  };

  const handClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const div = event.currentTarget;
    const rect = div.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const percentX = (clickX / width) * 100;

    if (percentX === 0 || percentX < 0) {
      setStatus("mute");
    }

    if (percentX < 70 && percentX > 0) {
      setStatus("low");
    }
    if (percentX > 70) {
      setStatus("full");
    }

    setCurrentVol(percentX);
    setVolume(percentX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!isDragging) return;
    const div = event.currentTarget;
    const rect = div.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    let percentX = (clickX / width) * 100;

    percentX = Math.max(0, Math.min(100, percentX));

    if (percentX === 0) {
      setStatus("mute");
    } else if (percentX < 70) {
      setStatus("low");
    } else {
      setStatus("full");
    }

    setCurrentVol(percentX);
    setVolume(percentX);
  };

  const volumeStyle: CSSProperties = {
    "--div-width": `${volume}%`,
  } as React.CSSProperties;

  return (
    <div className="flex gap-[8px] items-center">
      <button className="icon-audio" onClick={toggleStatus}>
        {status === "mute" && (
          <span className="icon icon-mute hover">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm101.66-61.3a8,8,0,0,1-11.32,11.32L216,139.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L204.69,128l-18.35-18.34a8,8,0,0,1,11.32-11.32L216,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L227.31,128Z"></path>
            </svg>
          </span>
        )}
        {status === "low" && (
          <span className="icon icon-speak-low hover">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55ZM208,128a39.93,39.93,0,0,1-10,26.46,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.58A40,40,0,0,1,208,128Z"></path>
            </svg>
          </span>
        )}
        {status === "full" && (
          <span className="icon icon-speak-low hover">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
            </svg>
          </span>
        )}
      </button>
      <button
        className="volume-bar"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handClick}
      >
        <button className="volume">
          <div className="volume-now" style={volumeStyle}></div>
        </button>
        <div className="circle" style={volumeStyle}></div>
        <div className="volume-bg"></div>
      </button>
    </div>
  );
}
