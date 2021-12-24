import { ReactNode, FunctionComponent } from "react";
import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

type PortalProps = {
  id: string;
  children: ReactNode;
}

const Portal: FunctionComponent<PortalProps> = ({ id, children }): JSX.Element => {
  const target: HTMLElement = usePortal(id);

  return createPortal(children, target);
}

export default Portal;
