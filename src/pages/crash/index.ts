import { createApp } from "../../shared/ui/create-app";
import { resizeHandler } from "../../shared/ui/resize-handler";
import { CrashScene } from "../../widgets/crash-scene";
import { LoadingScreen } from "../../widgets/loading-screen";

async function CrashPage() {
  const app = await createApp();
  resizeHandler(app);
  CrashScene(app);
  LoadingScreen(app);
}

export { CrashPage };
