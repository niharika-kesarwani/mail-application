/* eslint-disable react/prop-types */
import { useMails } from "../contexts/mail-context";

export const MailCard = ({
  mId,
  unread,
  isStarred,
  subject,
  content,
  trash,
}) => {
  const { setInboxMails } = useMails();
  return (
    <>
      <li key={mId}>
        <h2>Subject: {subject}</h2>
        {!trash && (
          <button
            onClick={() => setInboxMails({ type: "STAR_UNSTAR", id: mId })}
          >
            {isStarred ? "Unstar" : "Star"}
          </button>
        )}
        <p>{content}</p>
        {!trash && (
          <button onClick={() => setInboxMails({ type: "DELETE", id: mId })}>
            Delete
          </button>
        )}
        <button
          onClick={() =>
            setInboxMails({
              type: trash ? "DELETE_READ_UNREAD" : "READ_UNREAD",
              id: mId,
            })
          }
        >
          Mark as {unread ? "Read" : "Unread"}
        </button>
      </li>
    </>
  );
};
