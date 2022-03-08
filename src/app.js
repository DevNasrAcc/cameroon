import React, { Suspense } from "react";
import BaseRoutes from "../src/routes/index";
import "./translations/i18n";

const CameroonApp = () => {
  return (
    <Suspense fallback="loading">
      <BaseRoutes />
    </Suspense>
  );
};

export default CameroonApp;
