import React from "react";
import Image from "next/image";
import Link from "next/link";

interface GameItemProps {
  title: string;
  platform: string;
  image:
    | string
    | "/assets/img/Thumbnail1.png"
    | "/assets/img/Thumbnail2.png"
    | "/assets/img/Thumbnail3.png"
    | "/assets/img/Thumbnail4.png"
    | "/assets/img/Thumbnail5.png";
  id: string;
}

const GameItem = ({ title, platform, image, id }: GameItemProps) => {
  return (
    <div className="featured-game-card position-relative">
      <Link
        href={`/detail/${id}`}
        className="text-decoration-none"
      >
        <div className="blur-sharp">
          <img
            className="thumbnail"
            src={image}
            width={205}
            height={270}
            alt="thumbnail-game"
          />
        </div>

        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between">
            <div className="game-icon mx-auto">
              <Image
                src="/assets/icon/game.svg"
                width={54}
                height={36}
                alt="ic-game"
              />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{platform}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameItem;
