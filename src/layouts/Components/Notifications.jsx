import React from "react";

const Notifications = () => {
  return (
    <div className="rounded h-72 sm:h-72 w-60 sm:w-72 text-sm z-30 absolute top-14 sm:top-12 right-3  sm:left-0 bg-white text-left shadow-lg">
      <div className="w-full py-2 px-3 bg-white text-lg border rounded-t font-medium">
        Notifications
      </div>
      <section className="h-[223px] notification-container overflow-y-auto">
        {["", "", "", "", "", "", "", ""].map((item) => {
          return (
            <div className="p-2 border-b border-x flex gap-3 items-center">
              <div className="bg-color z-10 flex justify-center items-center text-3xl font-bold w-7 h-7 text-color border rounded-full cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                  alt=""
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div className="">
                <h3 className="text-xs font-bold">Title</h3>
                <p className="text-[11px] text-gray-600">
                  Lorem ipsum dolor sit.
                </p>
              </div>
            </div>
          );
        })}
      </section>

      <div className="w-full py-2 px-3  rounded-b text-sm text-center cursor-pointer bg-gray-200 font-medium">
        Read All Notifications
      </div>
    </div>
  );
};

export default Notifications;