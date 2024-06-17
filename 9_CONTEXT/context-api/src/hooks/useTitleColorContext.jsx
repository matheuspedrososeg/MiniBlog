import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    throw new Error("useTitleColorContext must be used within a TitleColorProvider");
  }

  return context;
};
