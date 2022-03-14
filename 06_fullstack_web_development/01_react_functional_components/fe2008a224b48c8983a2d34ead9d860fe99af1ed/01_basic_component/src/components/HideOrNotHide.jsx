import React from "react";

export const HideOrNotHide = () => {
  // Code here
  let [showtext, setShowText] = React.useState(true);

  if (showtext) {
    return (
      <div>
        <button onClick={() => setShowText((showtext = false))}>Paragraph Visible</button>
        <p>Some paragraph</p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setShowText((showtext = true))}>Paragraph hidden</button>
      </div>
    );
  }
};
