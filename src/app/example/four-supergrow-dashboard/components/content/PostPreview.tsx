"use client";

import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import {
  FaRegCommentDots,
  FaThumbsUp,
  FaHeart,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { RiSendPlaneLine, RiGlobalLine } from "react-icons/ri";

interface PostPreviewProps {
  postText: string;
}

function convertMarkdownToHtml(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
    .replace(/\*(.*?)\*/g, "<em>$1</em>") // Italic
    .replace(/~~(.*?)~~/g, "<del>$1</del>"); // Strikethrough
}

export default function PostPreview({ postText }: PostPreviewProps) {
  const htmlContent = convertMarkdownToHtml(postText);

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-md">
      <div className="p-4">
        <div className="flex items-start mb-4">
          <div className="w-16 h-16 mr-4 flex-shrink-0">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Cody Fisher"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.src = "/fallback-avatar.png";
              }}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Cody Fisher</h3>
            <p className="text-sm text-gray-600">
              UI/UX Design | Web & Mobile Design | Front-end UI Developer
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              Now • <RiGlobalLine className="inline ml-1" />
            </p>
          </div>
        </div>
        <div
          className="prose mb-6 text-gray-800"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        <div className="flex items-center mb-4">
          <div className="flex -space-x-1">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <FaThumbsUp className="text-blue-200 text-xs" />
            </div>
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <FaHeart className="text-red-200 text-xs" />
            </div>
            <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
              <FaLightbulb className="text-yellow-200 text-xs" />
            </div>
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <FaHandshake className="text-green-200 text-xs" />
            </div>
          </div>
          <span className="text-sm text-gray-500 ml-2">88</span>
          <span className="text-sm text-gray-500 ml-auto">
            4 comments • 1 repost
          </span>
        </div>
        <div className="flex justify-between border-t pt-3">
          <button className="text-gray-600 flex items-center">
            <AiOutlineLike className="mr-2" /> Like
          </button>
          <button className="text-gray-600 flex items-center">
            <FaRegCommentDots className="mr-2" /> Comment
          </button>
          <button className="text-gray-600 flex items-center">
            <FiShare className="mr-2" /> Share
          </button>
          <button className="text-gray-600 flex items-center">
            <RiSendPlaneLine className="mr-2" /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
