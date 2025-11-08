import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { MenuIcon } from "../../components/ui/menu-icon";

const pages = [
  { id: 1, name: "Page 1" },
  { id: 2, name: "Page 2" },
  { id: 3, name: "Page 3" },
  { id: 4, name: "Page 4" },
  { id: 5, name: "Page 5" },
  { id: 6, name: "Page 6" },
];

const buttons = [
  "/Property 1=Variant2.svg",
  "/Property 1=Variant6.svg",
  "/Property 1=Variant4.png",
  "/Property 1=Variant8.png",
  "/desktop-6.svg",
  "/desktop-1.svg",
  "/Property 1=Variant9.svg",
  "/desktop-3.svg",
  "/desktop.svg",
];

export const Frame = (): JSX.Element => {
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());

  const togglePage = (pageId: number) => {
    setSelectedPages((prev) => {
      const updated = new Set(prev);
      updated.has(pageId) ? updated.delete(pageId) : updated.add(pageId);
      return updated;
    });
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center justify-start pt-[85px] space-y-8">
      {/* === 1️⃣ Main Card Section === */}
      <Card className="w-[370px] bg-white rounded-md border border-[#eeeeee] shadow-[0px_8px_15px_#1414141f,0px_0px_4px_#1414141a]">
        <CardContent className="p-0">
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex w-full h-[42px] items-center justify-between pl-[22px] pr-[15px] py-2">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-website-colorblack text-sm leading-[18.2px]">
                All pages
              </div>
              <MenuIcon />
            </div>

            <Separator className="mx-[15px] my-2.5 max-w-[340px]" />

            {/* Pages Scroll List */}
            <ScrollArea className="h-[164px] w-full">
              <div className="flex flex-col">
                {pages.map((page) => (
                  <div
                    key={page.id}
                    onClick={() => togglePage(page.id)}
                    className="flex w-full h-[42px] items-center justify-between pl-[22px] pr-[15px] py-2 bg-white cursor-pointer hover:bg-list-itemgray-active"
                  >
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-website-colorblack text-sm leading-[18.2px]">
                      {page.name}
                    </div>
                    <MenuIcon />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <Separator className="mx-[15px] my-2.5 max-w-[340px]"/>

            {/* Done Button */}
            <div className="flex flex-col items-start px-[15px] py-2.5 bg-white">
              <Button className="w-full h-10 bg-website-colororange hover:bg-website-colororange/90 rounded text-maincolorblack text-sm font-normal [font-family:'Montserrat',Helvetica]">
                Done
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* === 2️⃣ Buttons Section === */}
      <div className="flex flex-col items-center w-full max-w-[370px] bg-white rounded-md shadow-sm border border-[#eeeeee]">
        {buttons.map((buttonSrc, index) => {
          const isLarge =
            index === 4 ||
            buttonSrc === "/Property 1=Variant9.svg" ||
            buttonSrc === "/desktop-6.svg";

          return (
            <div
              key={`btn-${index}`}
              className="flex w-full h-[42px] items-center justify-between pl-[22px] pr-[15px] py-2"
            >
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-website-colorblack text-sm leading-[18.2px]">
                All pages
              </div>
              <img
                src={buttonSrc}
                alt="Menu Icon"
                className={`object-contain ${
                  isLarge ? "w-[21px] h-[21px]" : "w-[18px] h-[18px]"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* === 3️⃣ Extra Buttons Section === */}
      <div className="flex flex-col items-center w-full max-w-[340px] space-y-2">
        {["#FFCE22", "#FFD84D", "#FFCE22"].map((color, index) => (
          <div
            key={`extra-btn-${index}`}
            className="flex w-full justify-center px-[15px] py-2.5 bg-white rounded-md border border-[#eeeeee]"
          >
            <Button
              className="w-full h-10 rounded text-maincolorblack text-sm font-normal [font-family:'Montserrat',Helvetica]"
              style={{ backgroundColor: color }}
            >
              Done
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
