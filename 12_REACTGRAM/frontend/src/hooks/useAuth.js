import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state) => state.auth);

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authenticate()
  }, [user]);
  
  async function authenticate (){
    if (user) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    
    await new Promise((resolve) => setTimeout(resolve, 5000))

    setLoading(false);
  }
  
  return { auth, loading };
};

export default useAuth;