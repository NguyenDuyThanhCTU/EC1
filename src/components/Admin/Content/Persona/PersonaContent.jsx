import { RightSide } from "../../../Login/UI/RightSide";
import LeftSide from "./Webconfig/LeftSide";

const PersonaContent = () => {
  return (
    <div className="h-[94vh] w-full bg-black font-LexendDeca text-white flex justify-between">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default PersonaContent;
