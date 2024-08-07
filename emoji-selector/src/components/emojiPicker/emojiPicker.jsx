// import { forwardRef, useState } from "react";

// import { data as emojiList } from "./data";
// import EmojiSearch from "./emojiSearch";

// export function EmojiPicker(props, inputRef) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [emojis, setEmojis] = useState(emojiList);

//   function handleClickOpen() {
//     setIsOpen(!isOpen);
//   }

//   function handleSearch(e) {
//     const q = e.target.value.toLowerCase();

//     if (!!q) {
//       const search = emojiList.filter((emoji) => {
//         return (
//           emoji.name.toLowerCase().includes(q) ||
//           emoji.keywords.toLowerCase().includes(q)
//         );
//       });

//       setEmojis(search);
//     } else {
//       setEmojis(emojiList);
//     }
//   }

//   function EmojiPickerContainer() {
//     return (
//       <div>
//         <EmojiSearch onSearch={handleSearch} />
//         <div>
//           {emojiList.map((emoji) => (
//             <div key={emoji.symbol}>{emoji.symbol}</div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <button onClick={handleClickOpen}>Emojis.</button>

//       {isOpen ? (
//         <div>
//           <EmojiSearch onSearch={handleSearch} />
//           <div>
//             {emojiList.map((emoji) => (
//               <div key={emoji.symbol}>{emoji.symbol}</div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default forwardRef(EmojiPicker);

import { forwardRef, useState } from "react";
import { data as emojiList } from "./data";
import EmojiSearch from "./emojiSearch";

function EmojiPickerContainer({ emojis, handleSearch }) {
  return (
    <div>
      <EmojiSearch onSearch={handleSearch} />
      <div>
        {emojis.map((emoji) => (
          <div key={emoji.symbol}>{emoji.symbol}</div>
        ))}
      </div>
    </div>
  );
}

export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  function handleSearch(e) {
    const q = e.target.value.toLowerCase();

    if (!!q) {
      const search = emojiList.filter((emoji) => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });

      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  }

  return (
    <div>
      <button onClick={handleClickOpen}>Emojis</button>

      {isOpen ? (
        <EmojiPickerContainer emojis={emojis} handleSearch={handleSearch} />
      ) : (
        ""
      )}
    </div>
  );
}

export default forwardRef(EmojiPicker);
