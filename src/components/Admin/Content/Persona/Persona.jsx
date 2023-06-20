import { useStateProvider } from "../../../../Context/StateProvider";
import { RightSide } from "../../../Login/UI/RightSide";
import SocialMedia from "./SocialMedia/SocialMedia";
import Contact from "./Webconfig/Contact/Contact";
import Trademark from "./Webconfig/Trademark/Trademark";

import LeftSide from "./a/LeftSide";

const Persona = () => {
  const { isSelected } = useStateProvider();
  return (
    <div className="h-[94vh] w-full  font-LexendDeca text-white ">
      {isSelected === 0 ? (
        <div className="p-5 px-10 flex justify-start gap-10">
          <Contact />
          <Trademark />
        </div>
      ) : isSelected === 1 ? (
        <div className="p-5 px-10 flex justify-start gap-10">
          <SocialMedia />
        </div>
      ) : isSelected === 2 ? (
        <>2</>
      ) : isSelected === 3 ? (
        <>3</>
      ) : isSelected === 4 ? (
        <>4</>
      ) : isSelected === 5 ? (
        <>5</>
      ) : null}
    </div>
  );
};

export default Persona;
