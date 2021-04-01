import { useContext } from "react";
import StateContext from "../contexts/stateContext";

const useStateValue = () => useContext(StateContext);

export default useStateValue;
