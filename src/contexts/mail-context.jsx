/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { mails } from "../data/mailsDB";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [inboxMails, setInboxMails] = useState(mails);
  return (
    <MailContext.Provider value={{ inboxMails, setInboxMails }}>
      {children}
    </MailContext.Provider>
  );
};

export const useMails = () => useContext(MailContext);
