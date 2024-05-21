import React from "react";
// import { YouTube, Instagram, Twitter, GitHub } from "@mui/icons-material";
import { FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

interface SocialLink {
  label: string;
  icon: React.ElementType;
}

interface LinkItem {
  label: string;
  key: string;
}

const socialLinks: SocialLink[] = [
  { label: "YouTube", icon: FaYoutube },
  { label: "Instagram", icon: FaInstagram },
  { label: "Twitter", icon: FaTwitter },
  { label: "GitHub", icon: FaGithub },
];

const links: LinkItem[][] = [
  [
    { label: "Company", key: "header-1" },
    { label: "About us", key: "item-1-1" },
    { label: "Blog", key: "item-1-2" },
    { label: "Contact us", key: "item-1-3" },
    { label: "Pricing", key: "item-1-4" },
    { label: "Testimonials", key: "item-1-5" },
  ],
  [
    { label: "Support", key: "header-2" },
    { label: "Help center", key: "item-2-1" },
    { label: "Terms of service", key: "item-2-2" },
    { label: "Legal", key: "item-2-3" },
    { label: "Privacy policy", key: "item-2-4" },
    { label: "Status", key: "item-2-5" },
  ],
];

export const Footer: React.FC = () => {
  return (
    <div className="  flex items-end justify-center font-poppins">
      <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-gray-800 px-5 text-white w-full p-4 relative">
        <div className="">
          <div className="footer-img flex items-center">
            <img
              src={"https://i.imgur.com/520zDfd.png"}
              alt="Company logo"
              className="w-16 h-auto"
            />
            <span className="text-3xl font-bold pl-2 text-white">
              Company name
            </span>
          </div>
          <div className="infos text-gray-400">
            <span>Copyright © 2020 Nexcent ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center space-x-3">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-12 h-12 p-2 rounded-full bg-gray-400 my-3 hover:bg-white hover:text-green-700 cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2">
          {links.map((col, colIndex) => {
            return (
              <ul className={`col col-${colIndex + 1}`} key={`col-${colIndex}`}>
                {col.map((link) => (
                  <li
                    key={link.key}
                    className={`text-gray-400 cursor-pointer ${
                      link.key.startsWith("header") ? "text-2xl text-white" : ""
                    }`}
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};
