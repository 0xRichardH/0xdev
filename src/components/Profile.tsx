import type React from "react";
import { Artboard, Avatar, WindowMockup } from "react-daisyui";

const Profile: React.FunctionComponent = () => {
  return (
    <Artboard size={3} horizontal className="py-36">
      <WindowMockup border borderColor="neutral" className="bg-base-300">
        <div className="grid grid-cols-12 justify-center px-4 py-16 bg-base-200">
          <Avatar
            src="https://avatars.githubusercontent.com/u/7600503"
            size="md"
            shape="circle"
            borderColor="primary"
            border
            className="h-36 w-36 md:col-span-3 col-span-12"
          />

          <div className="text-justify md:col-span-9 col-span-12">
            <h2 className="text-4xl font-bold">Richard Hao</h2>
            <p className="text-xl text-gray-500">Developer</p>
            <p className="text-base-content text-xl text-opacity-80">
              I'm a developer who loves to build things.
            </p>
          </div>
        </div>
      </WindowMockup>
    </Artboard>
  );
};

export default Profile;
