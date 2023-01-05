import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function CreateEmojiPedia(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      name={emojipedia.name}
      emoji={emojipedia.emoji}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(CreateEmojiPedia)}</dl>
    </div>
  );
}

export default App;
