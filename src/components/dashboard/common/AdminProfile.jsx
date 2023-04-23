import React from "react";

const AdminProfile = () => {
  return (
    <div className="adminPage flex flex-row  justify-between">
      <div className=" adminSideNav sticky top-20 border flex justify-center h-[80vh] w-[15vw]">
        <SideNav />
      </div>
      <div className="adminMain w-[85vw] float-right right-0 margin-auto bg-orange-800 ">
        Hey adin profile
      </div>
    </div>
  );
};

export default AdminProfile;
