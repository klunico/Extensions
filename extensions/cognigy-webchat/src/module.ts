import { createExtension } from "@cognigy/extension-tools";

import { changeBotAvatar } from "./nodes/changeBotAvatar";
import { resetBotAvatar } from "./nodes/resetBotAvatar";
import { changeUserAvatar } from "./nodes/changeUserAvatar";
import { resetUserAvatar } from "./nodes/resetUserAvatar";


export default createExtension({
	nodes: [
		changeBotAvatar,
		resetBotAvatar,
		changeUserAvatar,
		resetUserAvatar
	],
});