import { Outlet } from "react-router-dom";

export function LayoutClient() {
  return (
    <>
      <h1>LayoutClient</h1>
      <Outlet />
    </>
  );
}
