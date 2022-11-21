import Image from "next/image";
import { type FC } from "react";

const Header: FC = () => {
  return (
    <header className="p-8 max-w-[700px] m-auto">
      <div className="border-[3px] border-lightWhite rounded-[5px] flex p-[12px] justify-between">
        <Image
          src="/logo.svg"
          alt="rock paper scissors"
          width={82}
          height={48}
          className="m-[12px]"
          priority
        />

        <div className="bg-white rounded-lg w-[80px] flex justify-center flex-col items-center">
          <p className="text-lightBlue tracking-[1.56px] leading-3 text-[10px]">
            SCORE
          </p>
          <div className="font-bold text-lightGray text-[40px] leading-10">
            0
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
