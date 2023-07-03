import React, { useEffect } from "react";

import { useStateProvider } from "../../Context/StateProvider";
import { useData } from "../../Context/DataProviders";
import {
  getDocuments,
  getProducts,
} from "../../Config/Services/Firebase/FireStoreDB";

const Fetch = () => {
  const {
    setPhone,
    setAdvertisement,

    setLocation,
    setLogo,
    setWebsiteName,
    setProducts,
    setGmail,
    setAddress,
    setIco,
    setSocialMedia,
    setTypePost,
    setSlides,
  } = useData();

  const { isRefetch, setIsRefetch } = useStateProvider();

  useEffect(() => {
    setIsRefetch(1);
  }, []);

  useEffect(() => {
    if (isRefetch != "") {
      setIsRefetch("");
    }
    getDocuments("website").then((data) => {
      //Contact
      setPhone(data[0].phone);
      setGmail(data[0].gmail);
      setLocation(data[0].location);
      setAddress(data[0].address);
      //Slide

      setAdvertisement(data[1].advertisement);
      //SocialMedia
      setSocialMedia(data[2].Data);
      //Trademark
      setLogo(data[3].websiteLogo);
      setWebsiteName(data[3].websiteName);
      setIco(data[3].websiteIco);
    });

    getDocuments("slide").then((data) => {
      setSlides(data.reverse());
    });

    getProducts("posts").then((data) => {
      setProducts(data.reverse());
    });

    getProducts("posttype").then((data) => {
      setTypePost(data.reverse());
    });
  }, [isRefetch]);
  return <></>;
};

export default Fetch;
