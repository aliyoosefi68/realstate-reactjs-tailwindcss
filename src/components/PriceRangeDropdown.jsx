import React, { useState, useEffect, useContext } from "react";

//icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

//headless ui
import { Menu } from "@headlessui/react";

//house context
import { HouseContext } from "./HouseContext";

function PriceRangeDropdown() {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {value:"همه قیمت ها"},
    {value:"100000 - 130000 "},
    {value:"130000 - 160000 "},
    {value:"160000 - 190000 "},
    {value:"190000 - 220000 "},
    {value:"220000 - 250000 "},
   

]

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-right "
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">انتخاب محدوده قیمت</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default PriceRangeDropdown;
