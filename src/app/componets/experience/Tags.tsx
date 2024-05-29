import Link from "next/link";
import React from "react";

const linkData = [
  { label: "womans businesses", href: "#" },
  { label: "businesses", href: "#" },
  { label: "freinds", href: "#" },
  { label: "test tag", href: "#" },
  { label: "happyness", href: "#" },
];

function Tags() {
  return (
    <div className="mb-[42px]">
      <p className="text-[16px] font-light text-[#000] pt-[28px]">Tags:</p>
      <div className="flex flex-wrap items-center gap-[11px] mt-[7.5px]">
        {linkData.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[#931D72] text-[14px] font-[400] font-medium rounded-[64px] border-[1px] px-[13px] py-[4px]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tags;
