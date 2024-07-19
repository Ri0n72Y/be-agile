import { createPortal } from "react-dom";

// TODO: use id to create specific portal
export function Portal({ children }: React.PropsWithChildren<{ id?: string }>) {
  return createPortal(children, document.getElementById("portal")!);
}
