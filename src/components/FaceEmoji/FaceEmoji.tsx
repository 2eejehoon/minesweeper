import { STATE } from "../../contant";
import { ReactComponent as Smile } from "../../assets/smile.svg";
import { ReactComponent as Sad } from "../../assets/sad.svg";
import { ReactComponent as Normal } from "../../assets/normal.svg";

interface FaceEmojiProps {
  gameState: "WIN" | "LOSE" | "PLAY" | "READY";
}

function FaceEmoji({ gameState }: FaceEmojiProps) {
  switch (gameState) {
    case STATE.WIN:
      return <Smile width={35} height={35} />;

    case STATE.LOSE:
      return <Sad width={35} height={35} />;

    default:
      return <Normal width={35} height={35} />;
  }
}

export default FaceEmoji;
