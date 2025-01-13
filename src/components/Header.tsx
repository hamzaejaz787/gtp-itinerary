"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a href="https://guidetopakistan.pk/">
            <img
              src="/gtp_logo.webp"
              alt="GTP Logo"
              className="h-[74px] w-auto"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <a
            href="https://guidetopakistan.pk/"
            className="text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
          >
            Home
          </a>
          <a
            href="https://guidetopakistan.pk/about-us/"
            className="text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
          >
            About Us
          </a>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("tours")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              <a
                href="https://guidetopakistan.pk/tours/"
                className="flex items-center text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
              >
                Tours <ChevronDown className="h-4 w-4" />
              </a>
            </button>

            {activeDropdown === "tours" && (
              <div className="absolute left-1/2 top-[full] z-50 mt-1 grid w-[800px] -translate-x-1/2 grid-cols-4 gap-8  bg-black bg-opacity-[0.95] p-6 shadow-lg">
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    CUSTOMISED TOUR PACKAGE
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/pakistan-customized-tour-packages/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Customised Tour Package
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/hunza-and-azad-kashmir-tour-package/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Hunza and Azad Kashmir
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/honeymoon-tour-packages/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Honeymoon Tour Packages
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    CORPORATE TOUR
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/pakistan-corporate-tour/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Corporate Tour
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/chitral-and-kalash-tour-packages/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Chitral - kalash Tour
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/dudipatsar-lake-tour-packages/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Dudipatsar Lake
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/4-days-3-nights-tour-to-kumrat-valley/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Kumrat
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    HONEYMOON PACKAGE
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/naran-shogran-siri-paye-tour-package/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Naran Babusar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/sharan-forest-tour/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Sharan Forest
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/murree-hunza-tour-packages-guide-to-pakistan/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Murree Hunza
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/skardu-tour-package/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Skardu Tour
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/naltar-valley-tour-packages/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Naltar Valley
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    PAKISTAN CULTURAL AND RELIGIOUS TOUR
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/tour/pakistan-cultural-and-religious-tour/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Pakistan Cultural and Religious tour
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/sikh-yatra-tour-packages/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Sikh Yatra
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/hunza-tour-packages/"
                        className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Hunza Tour Packages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("destinations")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 ">
              <a
                href="https://guidetopakistan.pk/destinations/"
                className="flex items-center text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
              >
                Destinations <ChevronDown className="h-4 w-4" />
              </a>
            </button>
            {activeDropdown === "destinations" && (
              <div className="absolute left-1/2 top-[full] z-50 mt-1 grid w-[800px] -translate-x-1/2 grid-cols-4 gap-8  bg-black bg-opacity-[0.95] p-6 shadow-lg">
                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    GILGIT BALTISTAN
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/attabad-lake/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Attabad Lake
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/skardu-valley/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Skardu Valley
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/rakaposhi-basecamp/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Rakaposhi Base Camp
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/astore-valley/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Astore Valley
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destinations/gilgit-baltistan/"
                        className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        See More <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    KHYBER PAKHTUNKHWA
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/peshawar/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Peshawar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/chitral/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        Chitral
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/kalash-valley/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Kalash Valley
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/naran-valley/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Naran Valley
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destinations/kpk/"
                        className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        See More <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    ISLAMABAD
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/punjpeer-rocks/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Panjpeer rocks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/chattar-park-amusement/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Chattar Park
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/pir-sohawa/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Pir Sohawa
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/lake-view-park/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Lake View Park
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destinations/islamabad-the-serene-and-green-capital-of-pakistan/"
                        className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        See More <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    PUNJAB
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/murree/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Murree
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/neela-sandh/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Neela sandh
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/khewra-salt-mines/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Khewra Salt Mine
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/kartarpur-corridor/ "
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Kartarpur Corridor
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destinations/punjab-the-land-of-vivid-culture/"
                        className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        See More <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    SINDH
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/hyderabad/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Hyderabad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/sukkur/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Sukkur
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/thar-desert/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Thar Dessert
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/thatta/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Thatta
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destinations/sindh-the-land-of-sufis/"
                        className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        See More <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    BALOCHISTAN
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/gwadar/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Gwadar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/bolan-pass/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Bolan Pass
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/omara-beach/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Ormara Beach
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/ziarat-juniper-forest/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Ziarat Forest
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destinations/balochistan/"
                        className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        See More <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                    KASHMIR
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/arang-kel/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Arang kel
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/toli-peer/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Toli Peer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/a-complete-tour-guide-to-neelum-valley/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Neelum Valley
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destination/banjosa-lake/"
                        className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                      >
                        Banjosa Lake
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://guidetopakistan.pk/destinations/kashmir-the-land-of-fairytales/"
                        className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                      >
                        See More <ChevronRight className="h-4 w-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <a
            href="https://guidetopakistan.pk/gallery/"
            className="text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
          >
            Gallery
          </a>
          <a
            href="https://guidetopakistan.pk/blog/"
            className="text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
          >
            Blogs
          </a>
          <a
            href="https://guidetopakistan.pk/contact-us/"
            className="text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
          >
            Contact Us
          </a>
          <a
            href="https://guidetopakistan.pk/shop/"
            className="text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
          >
            Shop
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="pt-[96px] w-[300px] px-0 sm:w-[400px] bg-white overflow-y-auto max-h-screen"
            >
              <nav className="flex flex-col space-y-2 pb-16  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <a
                  href="https://guidetopakistan.pk/"
                  className="px-6 text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                >
                  Home
                </a>
                <a
                  href="https://guidetopakistan.pk/about-us/"
                  className="px-6 text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                >
                  About Us
                </a>

                <div className="">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "mobile-tours"
                          ? null
                          : "mobile-tours"
                      )
                    }
                    className="flex items-center justify-between w-full text-lg font-medium text-white hover:text-green-500"
                  >
                    <a
                      href="https://guidetopakistan.pk/tours/"
                      className="flex px-6 space-y-4 items-center text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                    >
                      Tours
                    </a>
                    <ChevronDown
                      className={`h-5 w-5  transform transition-transform ${
                        activeDropdown === "mobile-tours" ? "rotate-180" : ""
                      }`}
                      color="black"
                    />
                  </button>

                  {activeDropdown === "mobile-tours" && (
                    <div className=" bg-black bg-opacity-[0.95] space-y-6 px-8 py-4">
                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          CUSTOMISED TOUR PACKAGE
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/pakistan-customized-tour-packages/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Customised Tour Package
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/hunza-and-azad-kashmir-tour-package/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Hunza and Azad Kashmir
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/honeymoon-tour-packages/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Honeymoon Tour Packages
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          CORPORATE TOUR
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/pakistan-corporate-tour/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Corporate Tour
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/chitral-and-kalash-tour-packages/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Chitral - kalash Tour
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/dudipatsar-lake-tour-packages/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Dudipatsar Lake
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/4-days-3-nights-tour-to-kumrat-valley/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Kumrat
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          HONEYMOON PACKAGE
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/naran-shogran-siri-paye-tour-package/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Naran Babusar
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/sharan-forest-tour/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Sharan Forest
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/murree-hunza-tour-packages-guide-to-pakistan/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Murree Hunza
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/skardu-tour-package/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Skardu Tour
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/naltar-valley-tour-packages/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Naltar Valley
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          PAKISTAN CULTURAL AND RELIGIOUS TOUR
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/tour/pakistan-cultural-and-religious-tour/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Pakistan Cultural and Religious tour
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/sikh-yatra-tour-packages/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Sikh Yatra
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/hunza-tour-packages/"
                              className="text-[16px] leading-[16px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Hunza Tour Packages
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "mobile-destinations"
                          ? null
                          : "mobile-destinations"
                      )
                    }
                    className="flex items-center justify-between w-full text-lg font-medium text-white hover:text-green-500"
                  >
                    <a
                      href="https://guidetopakistan.pk/destinations/"
                      className="flex px-6 items-center text-[18px] leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                    >
                      Destinations{" "}
                    </a>
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform ${
                        activeDropdown === "mobile-destinations"
                          ? "rotate-180"
                          : ""
                      }`}
                      color="black"
                    />
                  </button>

                  {activeDropdown === "mobile-destinations" && (
                    <div className="bg-black bg-opacity-[0.95] space-y-6 px-8 py-4">
                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          GILGIT BALTISTAN
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/attabad-lake/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Attabad Lake
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/skardu-valley/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Skardu Valley
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/rakaposhi-basecamp/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Rakaposhi Base Camp
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/astore-valley/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Astore Valley
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destinations/gilgit-baltistan/"
                              className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              See More <ChevronRight className="h-4 w-4" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          KHYBER PAKHTUNKHWA
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/peshawar/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Peshawar
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/chitral/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              Chitral
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/kalash-valley/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Kalash Valley
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/naran-valley/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Naran Valley
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destinations/kpk/"
                              className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              See More <ChevronRight className="h-4 w-4" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          ISLAMABAD
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/punjpeer-rocks/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Panjpeer rocks
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/chattar-park-amusement/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Chattar Park
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/pir-sohawa/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Pir Sohawa
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/lake-view-park/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Lake View Park
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destinations/islamabad-the-serene-and-green-capital-of-pakistan/"
                              className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              See More <ChevronRight className="h-4 w-4" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          PUNJAB
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/murree/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Murree
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/neela-sandh/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Neela sandh
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/khewra-salt-mines/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Khewra Salt Mine
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/kartarpur-corridor/ "
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Kartarpur Corridor
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destinations/punjab-the-land-of-vivid-culture/"
                              className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              See More <ChevronRight className="h-4 w-4" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          SINDH
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/hyderabad/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Hyderabad
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/sukkur/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Sukkur
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/thar-desert/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Thar Dessert
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/thatta/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Thatta
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destinations/sindh-the-land-of-sufis/"
                              className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              See More <ChevronRight className="h-4 w-4" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          BALOCHISTAN
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/gwadar/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Gwadar
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/bolan-pass/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Bolan Pass
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/omara-beach/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Ormara Beach
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/ziarat-juniper-forest/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Ziarat Forest
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destinations/balochistan/"
                              className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              See More <ChevronRight className="h-4 w-4" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-[16px] leading-[16px] font-[700] font-sans text-[#376132]">
                          KASHMIR
                        </h4>
                        <ul className="ml-4 space-y-2 mt-2">
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/arang-kel/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Arang kel
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/toli-peer/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Toli Peer
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/a-complete-tour-guide-to-neelum-valley/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Neelum Valley
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destination/banjosa-lake/"
                              className="text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white"
                            >
                              Banjosa Lake
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://guidetopakistan.pk/destinations/kashmir-the-land-of-fairytales/"
                              className="flex items-center text-[13px] leading-[13px] font-[500] font-sans hover:text-[#376132] text-white "
                            >
                              See More <ChevronRight className="h-4 w-4" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <a
                  href="https://guidetopakistan.pk/gallery/"
                  className="text-[18px] px-6 leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                >
                  Gallery
                </a>
                <a
                  href="https://guidetopakistan.pk/blog/"
                  className="text-[18px] px-6 leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                >
                  Blogs
                </a>
                <a
                  href="https://guidetopakistan.pk/contact-us/"
                  className="text-[18px] px-6 leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                >
                  Contact Us
                </a>
                <a
                  href="https://guidetopakistan.pk/shop/"
                  className="text-[18px] px-6 leading-[27px] font-[600] font-sans text-black hover:text-[#376132]"
                >
                  Shop
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
