import { LiveQueryProvider } from "@sanity/preview-kit";
import { useMemo } from "react";
import getClient from "./sanity.client";

export const PreviewProvider = ({ children, token }) => {
  const client = useMemo(() => getClient({ preview: { token } }), [token]);
  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  );
};
