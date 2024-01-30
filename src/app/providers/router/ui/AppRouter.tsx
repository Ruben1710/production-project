import { routeConfig } from "@/shared/config";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Suspense fallback={<p>Loading....</p>}>
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
