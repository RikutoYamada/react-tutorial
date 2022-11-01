import { useContext } from "react";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export const App = () => {
  // admin flag
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  
  // click Switch Button
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>You are admin.</span> : <span>You are not admin.</span>}
      <button onClick={onClickSwitch}>switch</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};