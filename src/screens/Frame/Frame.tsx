import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";
import { CheckboxIcon } from "../../components/ui/checkbox-icon";
import { MenuIcon } from "../../components/ui/menu-icon";

const pages = [
  { id: 1, name: "Page 1" },
  { id: 2, name: "Page 2" },
  { id: 3, name: "Page 3" },
  { id: 4, name: "Page 4" },
  { id: 5, name: "Page 5" },
  { id: 6, name: "Page 6" },
];

export const Frame = (): JSX.Element => {
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());

  const togglePage = (pageId: number) => {
    setSelectedPages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(pageId)) {
        newSet.delete(pageId);
      } else {
        newSet.add(pageId);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-[#ffffff] w-full min-w-[578px] min-h-[794px] flex items-start justify-center pt-[85px]">
      <Card className="w-[370px] bg-[#ffffff] rounded-md border border-solid border-[#eeeeee] shadow-[0px_8px_15px_#1414141f,0px_0px_4px_#1414141a]">
        <CardContent className="p-0">
          <div className="flex flex-col">
            <div className="flex w-full h-[42px] items-center justify-between pl-[22px] pr-[15px] py-2 bg-white">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-website-colorblack text-sm tracking-[0] leading-[18.2px]">
                All pages
              </div>
              <MenuIcon />
            </div>

            <div className="flex items-start px-[15px] py-2.5">
              <Separator className="w-full" />
            </div>

            <ScrollArea className="h-[164px] w-full">
              <div className="flex flex-col">
                {pages.map((page, index) => (
                  <div
                    key={page.id}
                    onClick={() => togglePage(page.id)}
                    className="flex w-full h-[42px] items-center justify-between pl-[22px] pr-[15px] py-2 bg-white cursor-pointer hover:bg-list-itemgray-active"
                  >
                    <CheckboxIcon checked={selectedPages.has(page.id)} />
                    <div className="flex-1 ml-3 [font-family:'Montserrat',Helvetica] font-normal text-website-colorblack text-sm tracking-[0] leading-[18.2px]">
                      {page.name}
                    </div>
                    <MenuIcon />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex items-start px-[15px] py-2.5">
              <Separator className="w-full" />
            </div>

            <div className="flex flex-col items-start px-[15px] py-2.5 bg-[#ffffff]">
              <Button className="w-full h-10 bg-website-colororange hover:bg-website-colororange/90 rounded [font-family:'Montserrat',Helvetica] font-normal text-maincolorblack text-sm tracking-[0] leading-[18.2px]">
                Done
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
