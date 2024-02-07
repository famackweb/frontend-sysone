import { Outlet } from "react-router-dom";
import ilustration from "../../assets/ilustration.png";
import logo from "../../assets/logo1.png";

export function LayoutAuth() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 w-full h-full">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 h-full px-5 lg:px-0 md:py-12 lg:py-0">
        <div className="text-center space-y-3">
          <img src={logo} alt="" />
        </div>

        <div className="w-full max-w-[385px]">
          <Outlet />
        </div>
      </div>

      <div className="hidden md:block w-full lg:w-1/2 h-full bg-[#CCD1D7]">
        <img
          src={ilustration}
          alt=""
          className="object-cover object-center bg-no-repeat w-full h-full select-none"
        />
      </div>
    </div>
  );
}
