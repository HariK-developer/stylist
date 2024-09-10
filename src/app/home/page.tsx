"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faArrowLeft,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";


export default function Home() {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const fileType = file.type;
      const allowedTypes = ["image/png", "image/jpeg"];

      if (!allowedTypes.includes(fileType)) {
        setError("Only PNG and JPEG files are allowed.");
        setFileContent(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target?.result as string);
        setError(null);
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <div className="bg-[#1E1E1E] min-h-screen flex items-center">
      <div className="w-8/12 flex flex-col ml-12 ">
        <p className="font-semibold text-white text-8xl font-noto mb-2">
          Welcome to Your Personal Stylist .!
        </p>
        <div className="w-60 h-[72px] border-[3px] border-white flex items-center justify-center">
          <p className="text-white text-2xl font-notoSubFont">Skip the lag ?</p>
        </div>
      </div>
      <div className="mr-12">
        <div className="min-h-[500px] min-w-[400px] rounded-[20px] border border-gray-600 shadow-lg shadow-slate-700 bg-gradient-to-bl from-[#424242] to-[#232323] relative">
          <div className="flex justify-end items-end p-6 mb-10">
            <div className="flex bg-[#383838] h-5 w-5 rounded-full items-center justify-center cursor-pointer">
              <FontAwesomeIcon 
                color="white"
                width={10}
                height={10}
                icon={faCircleXmark}
              />
            </div>
          </div>
          <div className="relative cursor-pointer">
            <div className="flex flex-col items-center justify-center shadow-custom border border-dashed border-2 border-[#ffffff8b] p-5 rounded-xl h-52 bg-gradient-to-bl from-[#424242] to-[#4D4D4D] ml-3 rotate-[-3deg] w-11/12 z-10 absolute">
              <div
                className="bg-[#A6A6A6] p-0.5 rounded-lg inline-block shadow-lg"
                style={{ boxShadow: "-25px -5px 30px  #747474" }}
              >
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FontAwesomeIcon className="h-10 w-16"
                    icon={faImage}
                    color="#5C5C5C"
                  />
                </label>
                <input
                  id="file-upload"
                  className="hidden"
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={handleFileChange}
                />
              </div>
             
              <p className="text-[#8A8A8A] text-sm font-noto">
                Drop your images here
              </p>
              <p className="text-[#8F8F8F] text-xs font-noto">
                or click to browse
              </p>
            </div>
            <div className="shadow-custom border border-dashed border-2 border-[#ffffff8b] p-5 rounded-xl h-52 bg-[#393939] rotate-[-10deg] z-0 w-11/12 absolute"></div>
          </div>
          <div className="relative flex justify-between  mt-[350px] mr-4 ml-4">
            <div className="flex items-center justify-center gap-1 bg-gray-600 text-white font-medium text-xs font-nato py-2 px-3 rounded cursor-pointer hover:bg-slate-500">
              <FontAwesomeIcon icon={faArrowLeft} height={15} width={10} />
              <p>Reset</p>
            </div>
            <div className="flex items-center justify-center gap-1 bg-gradient-to-t from-[#4324FD] to-[#7776FE] text-white font-medium text-xs font-nato py-2 px-3 rounded cursor-pointer">
              <p>Save</p>
              <FontAwesomeIcon icon={faDownload} height={15} width={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
