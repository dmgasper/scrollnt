import React, { useState } from "react";
import { VariableSizeList } from "react-window";
import postRefs from "./postRefs";

const SocialFeedSimulator = () => {
  const [posts] = useState(postRefs);

  const headerHeight = ((window.innerWidth * 0.35) / 1125) * 182;
  const footerHeight = ((window.innerWidth * 0.35) / 1125) * 159;

  const Row = ({ index, style }) => {
    return (
      <img
        alt=""
        style={style}
        src={posts[index].image}
        width={posts[index].width}
        height={posts[index].height}
      />
    );
  };

  return (
    <div>
      <img
        style={{
          marginBottom: -7,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        alt=""
        src={"http://localhost:8080/images/header.png"}
        width={window.innerWidth * 0.35}
        height={headerHeight - 30}
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

      <img
        alt=""
        src={"http://localhost:8080/images/footer.png"}
        width={window.innerWidth * 0.35}
        height={footerHeight}
        style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
      />
    </div>
  );
};

export default SocialFeedSimulator;
