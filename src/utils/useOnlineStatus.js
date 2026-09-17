import { useState, useEffect } from "react";
export default function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState();

  useEffect(() => {
    window.addEventListener("online", () => setOnlineStatus(true));
    window.addEventListener("offline", () => setOnlineStatus(false));
  }, []);

  return onlineStatus;
}
