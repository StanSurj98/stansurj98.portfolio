import React from "react";
// import ProfilePic from '../../assets/profile_pic_nobg.png';
import ProfilePic from "../../assets/ProfilePic.jpg";

const ProfilePicContainer = () => {
  return (
    <div className="mb-8 flex flex-col items-center justify-center lg:h-3/5">
      <div className="aspect-square h-64 overflow-hidden rounded-full bg-cover bg-center ring-4 ring-neutral-100 drop-shadow-2xl lg:h-3/4 lg:ring-8">
        <img src={ProfilePic} alt="My Profile Picture" />
      </div>
    </div>
  );
};

export default ProfilePicContainer;
