import React from "react";
// import ProfilePic from '../../assets/profile_pic_nobg.png';
import ProfilePic from "../../assets/ProfilePic.jpg";

const ProfilePicContainer = () => {
  return (
    <div className="aspect-square h-4/5 overflow-hidden rounded-full bg-cover bg-center ring-4 ring-neutral-50 drop-shadow-2xl lg:h-3/4 lg:ring-8 2xl:h-full">
      <img src={ProfilePic} alt="picture of myself" />
    </div>
  );
};

export default ProfilePicContainer;
