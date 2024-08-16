"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaImage, FaPaperclip, FaCopy } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoMdCalendar } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { MdNetworkCheck } from "react-icons/md";
import { RiBold, RiItalic, RiStrikethrough } from "react-icons/ri";
import {
  FaCheck,
  FaCompressAlt,
  FaExpandAlt,
  FaRedo,
  FaListUl,
  FaClock,
  FaSmile,
  FaLanguage,
  FaVolumeUp,
  FaRegClock,
  FaRegSmile,
} from "react-icons/fa";

interface AIMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const AIMenu: React.FC<AIMenuProps> = ({ onMouseEnter, onMouseLeave }) => (
  <div
    className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 w-56 z-10 divide-y divide-gray-200"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div>
      {[
        { icon: <FaCheck />, text: "Complete" },
        { icon: <FaCompressAlt />, text: "Shorten" },
        { icon: <FaExpandAlt />, text: "Extend" },
        { icon: <FaRedo />, text: "Rephrase" },
        { icon: <FaListUl />, text: "Summarize" },
        { icon: <FaRegClock />, text: "tl;dr" },
        { icon: <FaRegSmile />, text: "Simplify" },
        { icon: <FaCheck />, text: "Spelling & Grammar" },
      ].map(renderMenuItem)}
    </div>
    <div>{[{ icon: <FaRegSmile />, text: "Emojify" }].map(renderMenuItem)}</div>
    <div>
      {[
        { icon: <FaVolumeUp />, text: "Tone of Voice", hasSubmenu: true },
        { icon: <FaLanguage />, text: "Translate", hasSubmenu: true },
      ].map(renderMenuItem)}
    </div>
  </div>
);

const renderMenuItem = (
  item: { icon: React.ReactNode; text: string; hasSubmenu?: boolean },
  index: number
) => (
  <button
    key={index}
    className="w-full text-left px-3 py-2 hover:bg-purple-50 flex items-center justify-between group"
  >
    <span className="flex items-center">
      <span className="w-5 h-5 mr-3 flex items-center justify-center text-gray-400 group-hover:text-purple-600">
        {item.icon}
      </span>
      <span className="text-sm text-gray-700 group-hover:text-purple-600">
        {item.text}
      </span>
    </span>
    {item.hasSubmenu && (
      <span className="text-gray-400 group-hover:text-purple-600">›</span>
    )}
  </button>
);

interface WritePostProps {
  postText: string;
  setPostText: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export default function WritePost({
  postText,
  setPostText,
  placeholder,
}: WritePostProps) {
  const [showAIMenu, setShowAIMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  };

  const toggleAIMenu = () => {
    setShowAIMenu(!showAIMenu);
  };

  const handleMouseEnter = () => {
    setShowAIMenu(true);
  };

  const handleMouseLeave = () => {
    setShowAIMenu(false);
  };

  const applyTextStyle = (style: "bold" | "italic" | "strikethrough") => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      const selectedText = postText.substring(start, end);
      let newText = "";

      switch (style) {
        case "bold":
          newText = `**${selectedText}**`;
          break;
        case "italic":
          newText = `*${selectedText}*`;
          break;
        case "strikethrough":
          newText = `~~${selectedText}~~`;
          break;
      }

      const updatedText =
        postText.substring(0, start) + newText + postText.substring(end);
      setPostText(updatedText);

      // Set focus back to textarea and update selection
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          textareaRef.current.setSelectionRange(start + 2, end + 2);
        }
      }, 0);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(postText).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  const handleInsertFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostText((prevText) => prevText + `\n[File: ${file.name}]`);
    }
  };

  const handleInsertImage = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostText(
        (prevText) => prevText + `\n![Image](${URL.createObjectURL(file)})`
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey) {
      switch (e.key.toLowerCase()) {
        case "b":
          e.preventDefault();
          applyTextStyle("bold");
          break;
        case "i":
          e.preventDefault();
          applyTextStyle("italic");
          break;
        case "x":
          if (e.shiftKey) {
            e.preventDefault();
            applyTextStyle("strikethrough");
          }
          break;
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowAIMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white w-full h-screen flex flex-col border-r border-gray-200">
      {/* Part 1 */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Write Post</h2>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium flex items-center border border-gray-300 hover:bg-gray-50">
            <MdNetworkCheck className="mr-2 text-gray-500" />
            Check Score
          </button>
          <div className="h-8 w-px bg-gray-300 mx-2"></div>
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Part 2 */}
      <div className="flex justify-between items-center p-2 border-b">
        <div className="flex space-x-2">
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => applyTextStyle("bold")}
          >
            <RiBold className="text-gray-500" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => applyTextStyle("italic")}
          >
            <RiItalic className="text-gray-500" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => applyTextStyle("strikethrough")}
          >
            <RiStrikethrough className="text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded transition-colors">
            <FaSmile className="text-gray-500" />
          </button>
          <div className="relative" ref={menuRef}>
            <button
              className="p-2 bg-purple-100 text-purple-600 rounded-full transition-colors flex items-center px-3 py-1"
              onClick={toggleAIMenu}
              onMouseEnter={handleMouseEnter}
            >
              <BsStars className="mr-1" />
              AI
            </button>
            {showAIMenu && (
              <AIMenu
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={handleCopyText}
          >
            <FaCopy className="text-gray-500" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={handleInsertImage}
          >
            <FaImage className="text-gray-500" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={handleInsertFile}
          >
            <FaPaperclip className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Part 3 */}
      <div className="flex-grow flex flex-col p-4 border-b">
        <textarea
          ref={textareaRef}
          className="w-full flex-grow resize-none focus:outline-none text-gray-700"
          placeholder={placeholder}
          value={postText}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
        <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
          <span>Last saved at Oct 4, 2023, 10:34 AM</span>
          <span>{postText.length} characters</span>
        </div>
      </div>

      {/* Part 4 */}
      <div className="flex justify-between items-center p-4">
        <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium">
          Save as Draft
        </button>
        <div className="flex space-x-2">
          <button className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-medium flex items-center">
            <IoMdCalendar className="mr-2" />
            Schedule
          </button>
          <button className="px-6 py-2 bg-[#00AAEC] text-white rounded-full font-medium flex items-center">
            Publish
            <FiSend className="ml-2" />
          </button>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
}
