import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const [signOut, loading, error] = useSignOut(auth); 
    const navigate = useNavigate();
    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

    signOut();
    navigate("/sign-in");
    return (
        <div>
            Logout
        </div>
    );
};

export default Logout;