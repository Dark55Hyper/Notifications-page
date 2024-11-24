import React from 'react';
import './Notifications.css';

function Notifications() {
  return (
    <div className="notifications-container">
      <div className="header">
        <h2>Notifications <span className="notification-count">3</span></h2>
        <button className="mark-all-read">Mark all as read</button>
      </div>
      <ul className="notifications-list">
        <li className="notification-item new">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="notification-content">
            <p><strong>Mark Webber</strong> reacted to your recent post <span className="notification-target">My first tournament today!</span></p>
            <span className="new-indicator">•</span>
            <div className="notification-time">1m ago</div>
          </div>
        </li>
        <li className="notification-item new">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="notification-content">
            <p><strong>Angela Gray</strong> followed you</p>
            <span className="new-indicator">•</span>
            <div className="notification-time">5m ago</div>
          </div>
        </li>
        <li className="notification-item new">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="notification-content">
            <p><strong>Jacob Thompson</strong> has joined your group <span className="notification-target">Chess Club</span></p>
            <span className="new-indicator">•</span>
            <div className="notification-time">1 day ago</div>
          </div>
        </li>
        <li className="notification-item">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="notification-content">
            <p><strong>Rizky Hasanuddin</strong> sent you a private message</p>
            <div className="notification-message">Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.</div>
            <div className="notification-time">5 days ago</div>
          </div>
        </li>
        <li className="notification-item">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="notification-content">
            <p><strong>Kimberly Smith</strong> commented on your picture</p>
            <div className="notification-time">1 week ago</div>
          </div>
        </li>
        <li className="notification-item">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="notification-content">
            <p><strong>Nathan Peterson</strong> reacted to your recent post <span className="notification-target">5 end-game strategies to increase your win rate</span></p>
            <div className="notification-time">2 weeks ago</div>
          </div>
        </li>
        <li className="notification-item">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <div className="notification-content">
            <p><strong>Anna Kim</strong> left the group <span className="notification-target">Chess Club</span></p>
            <div className="notification-time">2 weeks ago</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
