import { MailCard } from "../components/MailCard";
import { useMails } from "../contexts/mail-context";

export const Inbox = () => {
  const { inboxMails, setInboxMails, filterStarred, countOfUnread } =
    useMails();

  return (
    <div className="routes">
      <fieldset>
        <legend>Filters</legend>
        <label>
          <input
            type="checkbox"
            checked={inboxMails.showUnread}
            onChange={() => setInboxMails({ type: "SHOW_UNREAD" })}
          />
          Show unread mails
        </label>
        <label>
          <input
            type="checkbox"
            checked={inboxMails.showStarred}
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
