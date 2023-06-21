import React, { useEffect } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { getDocuments } from "../../../Config/Services/Firebase/FireStoreDB";
import { useData } from "../../../Context/DataProviders";

function Hotline() {
  const {
    setGmail,
    setAdress,
    setLocation,
    setLogo,
    setPhone,
    setWebsitename,
  } = useData();
  useEffect(() => {
    getDocuments("webconfig").then((data) => {
      setGmail(data[0].gmail);
      setAdress(data[0].address);
      setLocation(data[0].location);
      setLogo(data[0].logo);
      setPhone(data[0].phone);
      setWebsitename(data[0].websitename);
    });
  }, []);

  return (
    <div className="fixed bottom-7 right-10 z-[9999px] box-border">
      <div className="flex items-center">
        <div className="text-black font-semibold d:flex p:hidden justify-start items-center rounded-full w-[250px]  h-[60px] bg-white shadow-2xl absolute right-5">
          <a href="tel:0971706658">
            <span className="ml-5">Liên hệ với chúng tôi</span>
          </a>
        </div>
        <div className="h-16 w-16   call-animation">
          <BiPhoneCall className="text-white text-[40px]" />
        </div>
      </div>
    </div>
  );
}

export default Hotline;
