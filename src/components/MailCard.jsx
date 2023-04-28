/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useMails } from "../contexts/mail-context";

export const MailCard = ({
  mId,
  unread,
  isStarred,
  subject,
  content,
  trash,
  spam,
  tag,
  details,
}) => {
  tag === "spam" ? (spam = true) : tag === "trash" ? (trash = true) : null;
  const { setInboxMails } = useMails();
  return (
    <>
      <li key={mId}>
        <div className="space-between">
          <h2>Subject: {subject}</h2>
          <span>
            {!trash && (
              <button
                onClick={() =>
                  setInboxMails({
                    type: spam ? "SPAM_STAR_UNSTAR" : "STAR_UNSTAR",
                    id: mId,
                  })
                }
              >
                {isStarred ? "Unstar" : "Star"}
              </button>
            )}
          </span>
        </div>
        <p>{content}</p>
        <div className={!details && "space-between"}>
          {!details && (
            <NavLink to={`/details/${mId}`} className="navlink">
              View Details
            </NavLink>
          )}
          <div className="end-buttons">
            {!trash && (
              <button
                style={{ color: "red" }}
                onClick={() =>
                  setInboxMails({
                    type: spam ? "ADD_TRASH_FROM_SPAM" : "ADD_TRASH",
                    id: mId,
                  })
                }
              >
                {tag === "spam" ? (
                  <NavLink to="/spam" className="detail-navlink">
                    Delete
                  </NavLink>
                ) : details ? (
                  <NavLink to="/" className="detail-navlink">
                    Delete
                  </NavLink>
                ) : (
                  "Delete"
                )}
              </button>
            )}
            <button
              style={{ color: "orangered" }}
              onClick={() =>
                setInboxMails({
                  type: trash
                    ? "TRASH_READ_UNREAD"
                    : spam
                    ? "SPAM_READ_UNREAD"
                    : "READ_UNREAD",
                  id: mId,
                })
              }
            >
              Mark as {unread ? "Read" : "Unread"}
            </button>
            {!spam && (
              <button
                style={{ color: "green" }}
                onClick={() =>
                  setInboxMails({
                    type: trash ? "ADD_SPAM_FROM_TRASH" : "ADD_SPAM",
                    id: mId,
                  })
                }
              >
                {tag === "trash" ? (
                  <NavLink to="/trash" className="detail-navlink">
                    Report Spam
                  </NavLink>
                ) : details ? (
                  <NavLink to="/" className="detail-navlink">
                    Report Spam
                  </NavLink>
                ) : (
                  "Report Spam"
                )}
              </button>
            )}
          </div>
        </div>
      </li>
    </>
  );
};
