// Header.jsx
import React, { useState } from "react";
import { Dropdown, Nav, Navbar, Badge, Image } from "react-bootstrap";
import { Bell, Menu, Settings, LogOut, User } from "react-feather";

const Header = ({ notifications, user, onLogout }) => {
  const [unreadCount, setUnreadCount] = useState(
    notifications.filter((n) => !n.read).length
  );

  const markAllRead = () => {
    setUnreadCount(0);
    // you can call API here to mark all as read
  };

  return (
    <Navbar expand="lg" className="px-3 shadow-sm navbar-light bg-light">
      {/* Left side (Logo + menu button + title) */}
      <div className="d-flex align-items-center">
        <button className="btn btn-light d-lg-none me-2">
          <Menu size={20} />
        </button>
        <Navbar.Brand href="/dashboard">
          <img
            src="/logo192.png"
            alt="logo"
            height="32"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <h5 className="ms-3 mb-0">Dashboard</h5>
      </div>

      <Nav className="ms-auto align-items-center">
        {/* Notification Dropdown */}
        <Dropdown align="end" className="me-3">
          <Dropdown.Toggle
            as="a"
            className="nav-link position-relative"
            style={{ cursor: "pointer" }}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                {unreadCount}
              </Badge>
            )}
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: "300px" }}>
            <Dropdown.Header>
              Notifications
              {unreadCount > 0 && (
                <span
                  className="float-end text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={markAllRead}
                >
                  Mark all read
                </span>
              )}
            </Dropdown.Header>

            <div style={{ maxHeight: "250px", overflowY: "auto" }}>
              {notifications.length > 0 ? (
                notifications.map((n) => (
                  <Dropdown.Item key={n.id} className={!n.read ? "fw-bold" : ""}>
                    <div className="d-flex align-items-start">
                      <Image
                        src={n.icon}
                        roundedCircle
                        width={30}
                        height={30}
                        className="me-2"
                      />
                      <div>
                        <div>{n.title}</div>
                        <small className="text-muted">{n.message}</small>
                        <br />
                        <small className="text-muted">{n.time}</small>
                      </div>
                    </div>
                  </Dropdown.Item>
                ))
              ) : (
                <Dropdown.Item className="text-center">
                  No notifications
                </Dropdown.Item>
              )}
            </div>

            <Dropdown.Divider />
            <Dropdown.Item href="/notifications" className="text-center text-primary">
              View all
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Profile Dropdown */}
        <Dropdown align="end">
          <Dropdown.Toggle
            as="a"
            className="nav-link d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <Image
              src={user.image}
              roundedCircle
              width={36}
              height={36}
              className="me-2"
            />
            <span>{user.name}</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>Welcome!</Dropdown.Header>
            <Dropdown.Item href="/profile">
              <User size={16} className="me-2" /> My Account
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onLogout}>
              <LogOut size={16} className="me-2" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
