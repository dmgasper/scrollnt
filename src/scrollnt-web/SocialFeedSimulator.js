import React, { useState } from "react";
import { VariableSizeList } from "react-window";

import { Image } from "react-native-web";
import postRefs from "./postRefs";

const SocialFeedSimulator = () => {
  const [posts] = useState(postRefs);

  const headerHeight = ((window.innerWidth * 0.35) / 1125) * 182;
  const footerHeight = ((window.innerWidth * 0.35) / 1125) * 159;

  const Row = ({ index, style }) => {
    const p = posts[index].width / posts[index].height;

    return (
      <Image style={style} source={posts[index].image} resizeMode="cover" />
    );
  };

  return (
    <div>
      <Image
        source={require("./res/images/header.png")}
        resizeMode="cover"
        style={{ width: window.innerWidth * 0.35, height: headerHeight - 30 }}
      />

      <VariableSizeList
        overscanCount={2}
        height={window.innerHeight * 0.7}
        width={window.innerWidth * 0.35}
        itemCount={114}
        itemSize={(index) =>
          (posts[index].height * 0.35 * window.innerWidth) / posts[index].width
        }
      >
        {Row}
      </VariableSizeList>

      <Image
        source={require("./res/images/footer.png")}
        style={{
          width: window.innerWidth * 0.35,
          height: footerHeight,
        }}
      />
    </div>
  );
};

export default SocialFeedSimulator;
