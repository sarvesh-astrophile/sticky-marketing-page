"use client";

import React, { useState, useCallback } from "react";
import WritePost from "./WritePost";
import PostPreview from "./PostPreview";
import DeviceToggle from "./DeviceToggle";
import Link from "next/link";

const DEFAULT_TEXT =
  "Text editing like bold, italic, strikethrough are functional. the copy text button is functional. the post preview is functional. the device toggle is functional.";

const Banner = () => (
  <Link
    href="https://reetlab.com"
    className="block w-full mb-4 bg-gray-800 text-white p-3 rounded-md font-normal text-sm text-center hover:bg-gray-800 transition-colors"
  >
    ReetLab = Transform Your Website from Bland to Grand with Our Expert
    Services!
  </Link>
);

export default function ContentArea() {
  const [postText, setPostText] = useState(DEFAULT_TEXT);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyText = useCallback(() => {
    navigator.clipboard
      .writeText(postText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }, [postText]);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 max-h-full overflow-y-auto">
        <WritePost
          postText={postText}
          setPostText={setPostText}
          placeholder={DEFAULT_TEXT}
        />
      </div>
      <div className="w-1/2 flex flex-col h-full bg-white">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-600">Post Preview</h2>
          <DeviceToggle />
        </div>
        <div className="flex-grow flex flex-col items-center justify-start p-8 bg-gray-100">
          <Banner />
          <button
            onClick={handleCopyText}
            className={`mb-8 px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${
              isCopied ? "bg-blue-100 text-blue-700" : "bg-white text-gray-700"
            }`}
          >
            {isCopied ? "Text Copied" : "Copy Text"}
          </button>
          <PostPreview postText={postText} />
        </div>
      </div>
    </div>
  );
}
