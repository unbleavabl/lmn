import { Route, Router } from "electron-router-dom";

import { MainScreen } from "renderer/screens";
import { useImagePrefetch } from "./hooks/useImagePrefetch";
import { InfoProvider } from "./hooks/useInfo";
import { Name } from "./screens/Name";
import { Start } from "./screens/Start";

export function AppRoutes() {
  useImagePrefetch();
  return (
    <InfoProvider>
    <Router
      main={
        <>
          <Route path="/" element={<Start />} />
          <Route path="/name" element={<Name />} />
          <Route path="/main" element={<MainScreen />} />
        </>
      }
    />
    </InfoProvider>
  );
}
