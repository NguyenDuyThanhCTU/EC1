import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProviders = ({ children }) => {
  // Default
  const [Gmail, setGmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Location, setLocation] = useState("");
  const [Phone, setPhone] = useState("");

  const [Banner, setBanner] = useState([]);

  const [SocialMedia, setSocialMedia] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Logo, setLogo] = useState("");
  const [Ico, setIco] = useState("");
  const [Websitename, setWebsiteName] = useState("");

  const [Facebook, setFacebook] = useState();
  const [Fanpages, setFanpages] = useState();
  const [Instagram, setInstagram] = useState();
  const [Twitter, setTwitter] = useState();
  const [Message, setMessage] = useState();
  const [Tiktok, setTiktok] = useState();
  const [Zalo, setZalo] = useState();
  const [Youtube, setYoutube] = useState();
  // Custom

  const [Advertisement, setAdvertisement] = useState([]);
  const [HomePosts, setHomePosts] = useState([]);
  const [NewsPosts, setNewsPosts] = useState([]);

  const [TypePost, setTypePost] = useState([]);
  const [Slides, setSlides] = useState([]);

  const [userName, setUserName] = useState();
  const [Academic, setAcademic] = useState();
  const [Work, setWork] = useState();
  const [YearOfBirth, setYearOfBirth] = useState();
  const [StartJob, setStartJob] = useState();
  const [Avatar, setAvatar] = useState();
  return (
    <DataContext.Provider
      value={{
        Avatar,
        setAvatar,
        userName,
        setUserName,
        Academic,
        setAcademic,
        Work,
        setWork,
        YearOfBirth,
        setYearOfBirth,
        StartJob,
        setStartJob,

        TypePost,
        setTypePost,

        Slides,
        setSlides,

        Products,
        setProducts,
        NewsPosts,
        setNewsPosts,

        Facebook,
        setFacebook,
        Fanpages,
        setFanpages,
        Instagram,
        setInstagram,
        Twitter,
        setTwitter,
        Message,
        setMessage,
        Tiktok,
        setTiktok,
        Zalo,
        setZalo,
        Youtube,
        setYoutube,

        Phone,
        setPhone,
        Gmail,
        setGmail,
        Location,
        setLocation,
        Address,
        setAddress,

        Banner,
        setBanner,
        Advertisement,
        setAdvertisement,

        SocialMedia,
        setSocialMedia,

        Logo,
        setLogo,
        Websitename,
        setWebsiteName,
        Ico,
        setIco,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
