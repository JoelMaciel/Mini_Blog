import { useState } from "react";
import { getAuth } from "firebase/auth";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfCancelled() {
    if (cancelled) {
      return;
    }
  }
};
