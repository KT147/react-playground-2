import Card from "./Card"
import emojipedia from "../emojipedia"

function EmojiPedia() {
  return (<>
    <h1>
    <span>emojipedia</span>
  </h1>
  <dl className="dictionary">
    {emojipedia.map((emoji) => (
      <Card
        key={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning.substring(0,100)}
      />
    ))}
  </dl>
  </>
  )
}

export default EmojiPedia