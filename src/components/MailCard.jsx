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
        <h2>Subject: {subject}</h2>
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
        <p>{content}</p>
        {!details && <NavLink to={`/details/${mId}`}>View Details</NavLink>}
        {!trash && (
          <button
            onClick={() =>
              setInboxMails({
                type: spam ? "ADD_TRASH_FROM_SPAM" : "ADD_TRASH",
                id: mId,
              })
            }
          >
            {tag === "spam" ? (
              <NavLink to="/spam">Delete</NavLink>
            ) : details ? (
              <NavLink to="/">Delete</NavLink>
            ) : (
              "Delete"
            )}
          </button>
        )}
        <button
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
            onClick={() =>
              setInboxMails({
                type: trash ? "ADD_SPAM_FROM_TRASH" : "ADD_SPAM",
                id: mId,
              })
            }
          >
            {tag === "trash" ? (
              <NavLink to="/trash">Report Spam</NavLink>
            ) : details ? (
              <NavLink to="/">Report Spam</NavLink>
            ) : (
              "Report Spam"
            )}
          </button>
        )}
      </li>
    </>
  );
};
