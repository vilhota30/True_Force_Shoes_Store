import React from "react";
import socialMediaData from "data/SocialMediaLinks";

function SocialMediaProfileLinks(props) {
    return (
      <>
        <div>
          {socialMediaData.map((data, index) => {
            return (
              <a
                href={data.where_to_go_link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                style={{margin: '3px', color: 'darkblue',  }}
              >
                <data.icon_class />
              </a>
            );
          })}
        </div>
      </>
    );
  }
  
  export default SocialMediaProfileLinks;
  