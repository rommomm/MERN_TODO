import { useState, useEffect, useCallback } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const authMe = (jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userId: id,
        token: jwtToken,
      })
    );
  };

  const signOut = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      authMe(data.token, data.userId);
    }
    setIsReady(true);
  }, [authMe]);

  return { authMe, signOut, token, userId, isReady };
};
