import React from "react";

interface IconBox {
  icon?: React.ReactNode; // Optional icon
  text: string; // Text to display
  link?: string; // Optional link for the text
}

const IconBox: React.FC<IconBox> = ({ icon, text, link }) => {
  return (
    <div className="flex items-start gap-2">
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow break-words text-white font-sans font-[500] text-[14px] leading-[21px] hover:text-[#63983A]"
        >
          {text}
        </a>
      ) : (
        <span className="flex-grow break-words text-white font-sans font-[500] text-[14px] leading-[21px] hover:text-[#63983A]">{text}</span>
      )}
    </div>
  );
};

export default IconBox;
