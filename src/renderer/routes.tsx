import { Route, Router } from "electron-router-dom";

import { MainScreen } from "renderer/screens";
import { useImagePrefetch } from "./hooks/useImagePrefetch";
import { Name } from "./screens/Name";
import { Start } from "./screens/Start";

export function AppRoutes() {
  useImagePrefetch();
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Start />} />
          <Route path="/name" element={<Name />} />
          <Route path="/main" element={<MainScreen />} />
        </>
      }
    />
  );
}
