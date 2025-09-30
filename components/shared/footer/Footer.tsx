// import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = {
    products: [
      {
        label: "Software and App",
        href: "/product/software-and-app-development",
      },
      { label: "Logic Labels", href: "/product/logic-label" },
      {
        label: "Logic Light",
        href: "/product/logic-light",
      },
    ],
    support: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-conditions" },
    ],
  };

  // const socialLinks = [
  //   { icon: Facebook, href: "#", label: "Facebook" },
  //   { icon: Twitter, href: "#", label: "Twitter" },
  //   { icon: Linkedin, href: "#", label: "LinkedIn" },
  //   { icon: Instagram, href: "#", label: "Instagram" },
  // ];

  return (
    <footer
      id="contact"
      className="bg-gradient-light text-black relative z-[1] bg-gray-100"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/">
              <div className="flex items-center -ml-3">
                <Image
                  src="/img/logo.png"
                  alt="logo"
                  width={200}
                  height={200}
                ></Image>
              </div>
            </Link>
            <p className="text-black/80 font-body mb-6 leading-relaxed">
              The Great Logic delivers smart automation solutions, combining
              hardware and software to streamline operations across industries.
            </p>

            {/* Contact Info */}
            {/* <div className="space-y-3">
              <div className="flex items-center space-x-3 text-black/70">
                <Mail className="w-4 h-4" />
                <Link href={"mailto:Info@thegreatlogic.com"}>
                  <span className="font-body text-sm">
                    Info@thegreatlogic.com
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-3 text-black/70">
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">+91 82902 27562</span>
              </div>
              <div className="flex items-center space-x-3 text-black/70">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">
                  Rohido Jaipur Address, Rohido Mumbai Address
                </span>
              </div>
            </div> */}
          </div>

          {/* Products */}
          <div className="flex lg:justify-center">
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-black/70 hover:text-black transition-colors duration-200 font-body text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support & Social */}
          <div className="flex lg:justify-centerjustify-center">
            <div>
              <h4 className="text-lg font-heading font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-black/70 hover:text-black transition-colors duration-200 font-body text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media */}
          {/* <div>
            <h5 className="text-sm font-heading font-semibold mb-4 text-black/90">
              Follow Us
            </h5>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black/60 font-body text-sm">
              © 2025 Great Logic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
