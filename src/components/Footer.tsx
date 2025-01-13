import React from "react";
import IconBox from "./Iconbox";
import { FaLocationDot, FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";



function Footer() {
  return (
    <div className="w-full bg-[#376132] flex items-center justify-center pt-[50px] pb-[30px]">
    <div className="flex-col lg:w-[70%] md:w-[90%] w-[90%]">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        <div className="grid grid-cols gap-2">
          <h1 className="font-sans font-[700] text-[20px] leading-[33px] text-white pb-4">Guide To Pakistan</h1>
          <IconBox
            icon={<FaLocationDot className="text-white" />}
            text="Plaza 54, 2nd Floor, Mini Commercial Ext ll, Bahria Phase 7, Islamabad"
            link="https://maps.app.goo.gl/iTJdB5BweuPCb7jg9"
          />
          <IconBox
            icon={<MdPhoneIphone className="text-white" />}
            text="+92-340-3487487"
          />
          <IconBox
            icon={<MdPhoneIphone className="text-white" />}
            text="+92-302-0487487"
          />
          <IconBox
            icon={<FaPhoneSquareAlt className="text-white" />}
            text="+92-51-5733641"
          />
        </div>
        <div className="grid grid-cols gap-2">
          <h1 className="font-sans font-[700] text-[20px] leading-[33px] text-white pb-4">Travel Pakistan</h1>
          <IconBox
            text="Home"
            link="https://guidetopakistan.pk/"
          />
          <IconBox
            text="About Us"
            link="https://guidetopakistan.pk/about/"
          />
          <IconBox
            text="Destinations"
            link="https://guidetopakistan.pk/destination/"
          />
          <IconBox
            text="Gallery"
            link="https://guidetopakistan.pk/gallery/"
          />
          <IconBox
            text="Contact Us"
            link="https://guidetopakistan.pk/contact-us/"
          />
        </div>
        <div className="grid grid-cols gap-2">
          <h1 className="font-sans font-[700] text-[20px] leading-[33px] text-white pb-4">Read Info</h1>
          <IconBox
            text="History"
            link="https://guidetopakistan.pk/history/"
          />
          <IconBox
            text="Rich & Diverse Landscapes"
            link="https://guidetopakistan.pk/the-rich-and-diverse-landscapes-of-pakistan/"
          />
          <IconBox
            text="Facinating Cultural Diversity"
            link="https://guidetopakistan.pk/the-fascinating-cultural-diversity-of-pakistan/"
          />
          <IconBox
            text="Archeology & Heritage Sites"
            link="https://guidetopakistan.pk/archeology-and-heritage-sites/"
          />
          <IconBox
            text="The Climate"
            link="https://guidetopakistan.pk/the-climate/"
          />
        </div>
        <div className="grid grid-cols gap-2">
          <h1 className="font-sans font-[700] text-[20px] leading-[33px] text-white pb-4">Join Our Team</h1>
          <IconBox
            text="Work at GTP"
            link="https://guidetopakistan.pk/work-at-gtp/"
          />
          <IconBox
            text="List Your Business & Products"
            link="https://guidetopakistan.pk/list-your-business-products/"
          />
          <IconBox
            text="Become a Local Contact"
            link="https://guidetopakistan.pk/become-a-local-contact/"
          />
          <IconBox
            text="Terms & Conditions"
            link="https://guidetopakistan.pk/terms-conditions/"
          />
          <IconBox
            text="Copyright & Privacy"
            link="https://guidetopakistan.pk/copyright-privacy/"
          />
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-between border border-t-2 border-b-0 border-r-0 border-l-0 border-white pt-4 mt-8">
        <p className="font-sans font-[400] text-[14px] leading-[21px] text-white pb-4">@Copyright 2025 Guide To Pakistan | Powered by CyberX Studio</p>
        <div className="flex lg:gap-4 md:gap-2 gap-1">
        <FaFacebookSquare size={30} color="#ffffff" />
        <FaSquareXTwitter size={30} color="#000000"  />
        <FaSquareYoutube size={30} color="#CD201F"  />
        <FaLinkedin size={30} color="#0077B5"  />
        <FaInstagramSquare size={30} color="#262626"  />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
