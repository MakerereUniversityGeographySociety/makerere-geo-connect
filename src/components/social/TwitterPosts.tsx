
import React, { useEffect } from "react";

// Define the window interface for Twitter embeds
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

interface TweetProps {
  id: string;
  username: string;
  date: string;
  content: React.ReactNode;
  media?: string;
}

const Tweet = ({ id, username, date, content, media }: TweetProps) => {
  return (
    <div className="flex justify-center">
      <blockquote className="twitter-tweet" data-media-max-width="560">
        <p lang="en" dir="ltr">
          {content}
          {media && <a href={media}>{media}</a>}
        </p>
        &mdash; {username} 
        <a href={`https://twitter.com/${username.replace('@', '')}/status/${id}?ref_src=twsrc%5Etfw`}>
          {date}
        </a>
      </blockquote>
    </div>
  );
};

const TwitterPosts = () => {
  useEffect(() => {
    // Load Twitter widgets when component mounts
    const twitterScript = document.createElement("script");
    twitterScript.async = true;
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.charset = "utf-8";
    document.body.appendChild(twitterScript);

    return () => {
      // Clean up Twitter script when component unmounts
      document.body.removeChild(twitterScript);
    };
  }, []);

  const tweets = [
    {
      id: "1876576923226087574",
      username: "MAKERERE UNIVERSITY GEOGRAPHY SOCIETY MUGS (@MUGS57584)",
      date: "January 7, 2025",
      content: (
        <>
          As we embark on a new year, we remember the importance of preserving the planet&#39;s glaciers. ❄ 
          2025 is the International Year for the Preservation of Glaciers – a reminder of their vital role 
          in for the health of our ecosystems and socioeconomic wellbeing. 
          <a href="https://twitter.com/hashtag/HappyNewYear?src=hash&amp;ref_src=twsrc%5Etfw">#HappyNewYear</a> 
          <a href="https://twitter.com/hashtag/MUGS?src=hash&amp;ref_src=twsrc%5Etfw">#MUGS</a>
        </>
      ),
      media: "https://t.co/aOCfVGFMme"
    },
    {
      id: "1904126050293940697",
      username: "Food and Agriculture Organization (@FAO)",
      date: "March 24, 2025",
      content: (
        <>
          Taking <a href="https://twitter.com/hashtag/WaterAction?src=hash&amp;ref_src=twsrc%5Etfw">#WaterAction</a><br/> 
          really<br/> really<br/> really<br/> really<br/> really<br/> really<br/> really<br/> 
          really<br/>really<br/> really<br/> really<br/> really<br/> really<br/> really<br/> 
          really<br/> really<br/> really<br/> really<br/> really<br/>can&#39;t wait.
        </>
      ),
      media: "https://t.co/qVCfyfZ2C2"
    },
    {
      id: "1842498775903789285",
      username: "MAKERERE UNIVERSITY GEOGRAPHY SOCIETY MUGS (@MUGS57584)",
      date: "October 5, 2024",
      content: <></>,
      media: "https://t.co/Yv92S9CYRd"
    }
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-center mb-6">Latest Tweets</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </div>
  );
};

export default TwitterPosts;
