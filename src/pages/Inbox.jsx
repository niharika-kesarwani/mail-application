import { MailCard } from "../components/MailCard";
import { useMails } from "../contexts/mail-context";

export const Inbox = () => {
  const { setInboxMails, filterStarred, countOfUnread } = useMails();

  return (
    <div className="routes">
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            onChange={() => setInboxMails({ type: "SHOW_UNREAD" })}
          />
          Show unread mails
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => setInboxMails({ type: "SHOW_STARRED" })}
          />
          Show starred mails
        </label>
      </fieldset>
      <h2>Unread: {countOfUnread}</h2>
      <ul>
        {filterStarred?.map((mail) => (
          <MailCard key={mail.mId} {...mail} />
        ))}
      </ul>
    </div>
  );
};
