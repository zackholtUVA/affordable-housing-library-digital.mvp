import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

const storage = new Map<string, string>();

const localStorageMock = {
  getItem: (key: string) => (storage.has(key) ? storage.get(key)! : null),
  setItem: (key: string, value: string) => {
    storage.set(key, String(value));
  },
  removeItem: (key: string) => {
    storage.delete(key);
  },
  clear: () => {
    storage.clear();
  },
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true,
});

const routerPushMock = vi.fn();
(globalThis as { __routerPushMock?: typeof routerPushMock }).__routerPushMock = routerPushMock;

beforeEach(() => {
  routerPushMock.mockReset();
});

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => React.createElement("a", { href, ...props }, children),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: routerPushMock,
  }),
}));
