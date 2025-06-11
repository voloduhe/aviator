import { createApp } from "../../shared/ui/create-app";
import { resizeHandler } from "../../shared/ui/resize-handler";
import { CrashScene } from "../../widgets/crash-scene";

async function CrashPage() {
  const app = await createApp();
  resizeHandler(app);
  CrashScene(app);
}

export { CrashPage };
