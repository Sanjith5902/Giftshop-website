import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import profile from "../assets/profile.png";
import "./profile.css";

function Profile() {

  const handleLogout = () => {
    alert("Logout clicked");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (confirmDelete) {
      alert("Account deleted");
    }
  };

  return (
    <div className="profile-container">

      <h2 className="profile_name">Profile</h2>

      <Card className="profile_card">

        <Card.Body className="profile_cd">

          {/* Profile Image */}
          <div>
            <Card.Img
              className="profile_image"
              variant="top"
              src={profile}
            />
          </div>

          <Button className="profile_button1">
            Upload Image
          </Button>

          <h4>Sanjith Chandran</h4>

          <div>

            <div className="profile_text">
              <h5>Phone: 754xxxxxx</h5>
            </div>

            <div className="profile_text">
              <h5>Mail: saxxx@gmail.com</h5>
            </div>

            <div className="profile_dash"></div>

          </div>

          
          <Button className="profile_button1">
            Change Password
          </Button>

          <Dropdown className="profile_settings">

            <Dropdown.Toggle
              variant="dark"
              id="settings-dropdown"
            >
              Settings
            </Dropdown.Toggle>

            <Dropdown.Menu>

              <Dropdown.Item>
                Change Password
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item>
                Terms & Conditions
              </Dropdown.Item>

              <Dropdown.Item>
                Privacy Policy
              </Dropdown.Item>

              <Dropdown.Divider />

              <Dropdown.Item
                className="delete_account"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </Dropdown.Item>

              <Dropdown.Item
                className="logout"
                onClick={handleLogout}
              >
                Logout
              </Dropdown.Item>

            </Dropdown.Menu>

          </Dropdown>

        </Card.Body>

      </Card>

    </div>
  );
}

export default Profile;