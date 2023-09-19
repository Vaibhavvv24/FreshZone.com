import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../contexts/authcontext";
import { Alert, Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function Profile() {
  const { logOut, user } = UseAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  //   there is a useHistory hook as well
  const handleLogout = async () => {
    try {
      setError("");
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {user.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        <Button variant="link" onClick={() => navigate("/")}>
          Go to home
        </Button>
      </div>
    </>
  );
}
