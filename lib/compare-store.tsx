"use client";

import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

import { COMPARE_MAX } from "@/lib/constants";

type CompareState = {
  selectedIds: string[];
};

type CompareAction =
  | { type: "add"; id: string }
  | { type: "remove"; id: string }
  | { type: "toggle"; id: string }
  | { type: "clear" };

type CompareContextValue = {
  selectedIds: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  toggle: (id: string) => void;
  clear: () => void;
  isSelected: (id: string) => boolean;
  isFull: boolean;
};

const initialState: CompareState = {
  selectedIds: [],
};

function compareReducer(state: CompareState, action: CompareAction): CompareState {
  switch (action.type) {
    case "add": {
      if (state.selectedIds.includes(action.id) || state.selectedIds.length >= COMPARE_MAX) {
        return state;
      }
      return { selectedIds: [...state.selectedIds, action.id] };
    }
    case "remove":
      return {
        selectedIds: state.selectedIds.filter((id) => id !== action.id),
      };
    case "toggle":
      return state.selectedIds.includes(action.id)
        ? compareReducer(state, { type: "remove", id: action.id })
        : compareReducer(state, { type: "add", id: action.id });
    case "clear":
      return initialState;
    default:
      return state;
  }
}

const CompareContext = createContext<CompareContextValue | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(compareReducer, initialState);

  const value = useMemo<CompareContextValue>(
    () => ({
      selectedIds: state.selectedIds,
      add: (id) => dispatch({ type: "add", id }),
      remove: (id) => dispatch({ type: "remove", id }),
      toggle: (id) => dispatch({ type: "toggle", id }),
      clear: () => dispatch({ type: "clear" }),
      isSelected: (id) => state.selectedIds.includes(id),
      isFull: state.selectedIds.length >= COMPARE_MAX,
    }),
    [state.selectedIds],
  );

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompareStore(): CompareContextValue {
  const value = useContext(CompareContext);
  if (!value) {
    throw new Error("useCompareStore must be used within CompareProvider");
  }
  return value;
}

