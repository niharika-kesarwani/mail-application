/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/mailsDB";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const handleInboxReducer = (inboxMails, { type, id }) => {
    switch (type) {
      case "SHOW_UNREAD":
        return { ...inboxMails, showUnread: !inboxMails.showUnread };
      case "SHOW_STARRED":
        return { ...inboxMails, showStarred: !inboxMails.showStarred };

      case "STAR_UNSTAR":
        return {
          ...inboxMails,
          allMails: inboxMails.allMails?.map((mail) =>
            mail.mId === id ? { ...mail, isStarred: !mail.isStarred } : mail
          ),
        };
      case "SPAM_STAR_UNSTAR":
        return {
          ...inboxMails,
          spamMails: inboxMails.spamMails?.map((mail) =>
            mail.mId === id ? { ...mail, isStarred: !mail.isStarred } : mail
          ),
        };

      case "ADD_TRASH":
        return {
          ...inboxMails,
          trashMails: [
            inboxMails.allMails?.find(({ mId }) => mId === id),
            ...inboxMails.trashMails,
          ],
          allMails: inboxMails.allMails?.filter(({ mId }) => mId !== id),
        };
      case "ADD_TRASH_FROM_SPAM":
        return {
          ...inboxMails,
          trashMails: [
            inboxMails.spamMails?.find(({ mId }) => mId === id),
            ...inboxMails.trashMails,
          ],
          spamMails: inboxMails.spamMails?.filter(({ mId }) => mId !== id),
        };

      case "READ_UNREAD":
        return {
          ...inboxMails,
          allMails: inboxMails.allMails?.map((mail) =>
            mail.mId === id ? { ...mail, unread: !mail.unread } : mail
          ),
        };
      case "TRASH_READ_UNREAD":
        return {
          ...inboxMails,
          trashMails: inboxMails.trashMails?.map((mail) =>
            mail.mId === id ? { ...mail, unread: !mail.unread } : mail
          ),
        };
      case "SPAM_READ_UNREAD":
        return {
          ...inboxMails,
          spamMails: inboxMails.spamMails?.map((mail) =>
            mail.mId === id ? { ...mail, unread: !mail.unread } : mail
          ),
        };

      case "ADD_SPAM":
        return {
          ...inboxMails,
          spamMails: [
            inboxMails.allMails?.find(({ mId }) => mId === id),
            ...inboxMails.spamMails,
          ],
          allMails: inboxMails.allMails?.filter(({ mId }) => mId !== id),
        };
      case "ADD_SPAM_FROM_TRASH":
        return {
          ...inboxMails,
          spamMails: [
            inboxMails.trashMails?.find(({ mId }) => mId === id),
            ...inboxMails.spamMails,
          ],
          trashMails: inboxMails.trashMails?.filter(({ mId }) => mId !== id),
        };

      default:
        return inboxMails;
    }
  };

  const [inboxMails, setInboxMails] = useReducer(handleInboxReducer, {
    allMails: mails,
    trashMails: [],
    spamMails: [],
    showUnread: false,
    showStarred: false,
  });

  const filterUnread = inboxMails.showUnread
    ? inboxMails.allMails?.filter(({ unread }) => unread)
    : inboxMails.allMails;

  const filterStarred = inboxMails.showStarred
    ? filterUnread?.filter(({ isStarred }) => isStarred)
    : filterUnread;

  const countOfUnread = filterStarred?.filter(({ unread }) => unread).length;

  return (
    <MailContext.Provider
      value={{ inboxMails, setInboxMails, filterStarred, countOfUnread }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMails = () => useContext(MailContext);
