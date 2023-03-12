import { Route, Router } from "electron-router-dom";

import { MainScreen } from "renderer/screens";
import { Start } from "./screens/Start";

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<Start />} />
          <Route path="/main" element={<MainScreen />} />
        </>
      }
    />
  );
}
