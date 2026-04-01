"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { SessionContextSnapshot } from "@/lib/types";

const EXPLORED_KEY = "ahl-session-explored";
const RECENT_KEY = "ahl-session-recent";
const RECENT_LIMIT = 6;

type SessionContextValue = {
  exploredIds: string[];
  recentIds: string[];
  markOptionViewed: (id: string) => void;
  clearSessionHistory: () => void;
  buildSnapshot: (selectedIds: string[]) => SessionContextSnapshot;
};

const SessionContext = createContext<SessionContextValue | null>(null);

function parseStoredIds(value: string | null): string[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}

export function SessionContextProvider({ children }: { children: ReactNode }) {
  const [exploredIds, setExploredIds] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    return parseStoredIds(window.sessionStorage.getItem(EXPLORED_KEY));
  });
  const [recentIds, setRecentIds] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    return parseStoredIds(window.sessionStorage.getItem(RECENT_KEY));
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.sessionStorage.setItem(EXPLORED_KEY, JSON.stringify(exploredIds));
  }, [exploredIds]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.sessionStorage.setItem(RECENT_KEY, JSON.stringify(recentIds));
  }, [recentIds]);

  const value = useMemo<SessionContextValue>(
    () => ({
      exploredIds,
      recentIds,
      markOptionViewed: (id: string) => {
        setExploredIds((current) => (current.includes(id) ? current : [...current, id]));
        setRecentIds((current) => [id, ...current.filter((value) => value !== id)].slice(0, RECENT_LIMIT));
      },
      clearSessionHistory: () => {
        setExploredIds([]);
        setRecentIds([]);
      },
      buildSnapshot: (selectedIds: string[]) => ({
        selectedIds,
        exploredIds,
        recentIds,
      }),
    }),
    [exploredIds, recentIds],
  );

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
}

export function useSessionContext(): SessionContextValue {
  const value = useContext(SessionContext);
  if (!value) {
    throw new Error("useSessionContext must be used within SessionContextProvider");
  }
  return value;
}
