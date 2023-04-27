/* eslint-disable react/prop-types */
import { useMails } from "../contexts/mail-context";

export const MailCard = ({
  mId,
  unread,
  isStarred,
  subject,
  content,
  trash,
  spam,
}) => {
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
        {!trash && (
          <button
            onClick={() =>
              setInboxMails({
                type: spam ? "ADD_TRASH_FROM_SPAM" : "ADD_TRASH",
                id: mId,
              })
            }
          >
            Delete
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
            Report Spam
          </button>
        )}
      </li>
    </>
  );
};
