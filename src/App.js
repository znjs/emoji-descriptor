import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😋": "Face Savoring Food"
};

var emojiKnown = Object.keys(emojiDictionary);
export default function App() {
  const [emojiInput, setEmojiInput] = useState("");

  function emojiInputHandler(event) {
    setEmojiInput(emojiDictionary[event.target.value]);
    if (emojiDictionary[event.target.value] === undefined) {
      setEmojiInput("We Dont have this emoji in our Database");
      if (event.target.value === "") {
        setEmojiInput("");
      }
    }
  }

  function emojiClickHandler(item) {
    console.log("clicked", item);
    setEmojiInput(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Emoji Descriptor</h1>
      <h3>Enter your emoji below or click on an emoji...</h3>
      <input onChange={emojiInputHandler}></input>
      <div>
        <h2>{emojiInput}</h2>
      </div>
      <h3>
        {emojiKnown.map(function (item) {
          return (
            <span
              key={item}
              style={{ fontSize: "2rem", padding: "0.5rem" }}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </h3>
    </div>
  );
}

/**
 * things to note
 * class -> className
 * style takes an object
 *
 */
/**
 * VISER = view rendering, interact, State in event handler, Rense it
 */
