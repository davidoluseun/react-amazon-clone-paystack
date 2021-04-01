import { createContext } from "react";

const StateContext = createContext();

export const Provider = StateContext.Provider;
export const Consumer = StateContext.Consumer;

export default StateContext;
