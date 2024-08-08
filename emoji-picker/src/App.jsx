import { useState } from "react";
import EmojiPickerInput from "./components/emojiPicker/emojiPickerInput";

function App() {
  const [count, setCount] = useState(0);

  return <EmojiPickerInput />;
}

export default App;
