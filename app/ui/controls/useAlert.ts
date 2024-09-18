"use client";

import { alertContext } from "./alertContext";
import { useContext } from "react";

export const useAlert = () => {
  const context = useContext(alertContext);
  if (!context) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
};
