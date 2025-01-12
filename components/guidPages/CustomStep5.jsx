"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CustomStep5() {
  const [avatar, setAvatar] = (useState < string) | (null > null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef < HTMLInputElement > null;

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Your avatar</h2>
        <div
          onClick={handleImageClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative w-full aspect-[2/1] 
            bg-gray-50 rounded-2xl cursor-pointer 
            overflow-hidden flex items-center justify-center
            transition-colors duration-200
            ${
              isDragging
                ? "bg-gray-100 border-2 border-dashed border-gray-300"
                : ""
            }
          `}
        >
          {avatar ? (
            <Image
              src={avatar}
              alt="Selected avatar"
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {isDragging ? "Drop image here" : "Click or drag image here"}
              </p>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Your name is</h2>
        <Input
          type="text"
          placeholder="Your full name"
          className="rounded-xl border-gray-200 h-14"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Where you located</h2>
        <Select>
          <SelectTrigger className="w-full rounded-xl border-gray-200 h-14">
            <SelectValue placeholder="Countries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            {/* Add more countries as needed */}
          </SelectContent>
        </Select>
      </div>

      <Button
        className="w-14 h-14 rounded-2xl fixed bottom-6 right-6"
        variant="default"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </Button>
    </div>
  );
}
