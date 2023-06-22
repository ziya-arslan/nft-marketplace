"use client";

import React from "react";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

const supportedChainIds = [80001];
const connectors = {
  injected: {},
};

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    // @ts-ignore
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      {children}
    </ThirdwebWeb3Provider>
  );
};

export default App;
