import { useState } from "react";

function useLoginFormStatus() {
  const [loginForm, setLoginForm] = useState(null);

  return [loginForm, setLoginForm];
}

export default useLoginFormStatus;
