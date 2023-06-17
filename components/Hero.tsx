"use client";
import React, { useReducer } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};
export default function Hero({}: Props) {
  useReducer((state, action) => {
    return state + action;
  }, 0);
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Alex",
      "<ConstantLearner />",
      "Soup Dumpling Enthusiast",
      "Growth-oriented.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/../public/profile-photo.png"
        width={500}
        height={500}
        alt="Picture of myself"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">
        Software Engineer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
