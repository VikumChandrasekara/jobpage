import React from 'react';
import '../css/SocialMediaFeeds.css';

// Social media platform logos and colors
const socialPlatforms = [
  { 
    name: 'Instagram', 
    color: 'linear-gradient(45deg, #ff5843, #ff9052)', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' 
  },
  { 
    name: 'Facebook', 
    color: '#3b5998', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' 
  },
  { 
    name: 'Twitter', 
    color: '#1da1f2', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg' 
  },
  { 
    name: 'Pinterest', 
    color: '#c8232c', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png' 
  },
  { 
    name: 'Dribbble', 
    color: '#ea4c89', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Dribbble_logo.png' 
  }
];

const SocialMediaFeeds = () => {
  return (
    <div className="social-media-feeds-container">
      {socialPlatforms.map((platform, index) => (
        <div 
          key={platform.name} 
          className="social-media-feed-box" 
          style={{ 
            background: platform.color,
            animationDelay: `${index * 0.2}s`
          }}
        >
          <img 
            src={platform.logo} 
            alt={`${platform.name} logo`} 
            className="social-media-logo" 
          />
          <span className="social-media-name">{platform.name} Feeds</span>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaFeeds;