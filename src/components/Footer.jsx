import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <div className="mt-20 py-10 border-t border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h4 className="font-semibold mb-4 text-md">Resources</h4>
          <ul className="space-y-2">
            {resourcesLinks.map((item, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-md">Platform</h4>
          <ul className="space-y-2">
            {platformLinks.map((item, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-md">Community</h4>
          <ul className="space-y-2">
            {communityLinks.map((item, index) => (
              <li key={index}>
                <a className="text-neutral-300 hover:text-white" href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
