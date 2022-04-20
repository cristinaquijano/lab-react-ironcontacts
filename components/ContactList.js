import React, {useState} from "react";
import "../App.css"
import contactsJson from "../contacts.json";

function ContactsDetails() {
    let fiveContacts = contactsJson.slice(0,5);
    const [contacts, updatecontacts] = useState(fiveContacts);

    const getRandomContact = () => {
        let randomIndex = Math.floor(Math.random() * contactsJson.length);
        let randomContact = contactsJson[randomIndex]

        updateContacts([randomContact, ...contacts]);
    };
    const sortByName = () => {
        let contactsSortedByName = JSON.parse(JSON.stringify(contacts))
    contactsSortedByName.sort((a,b) => {
        contactsSortedByName.sort((a,b) => {
            if (a.name > b.name) {
                return 1
            } else if (a.name < b.name) {
                return -1
            } else {
                return 0
            }
        })
        updateContacts(contactsSortedByName)
    })
    const sortByPopularity = () => {
        let contactsSortedByPopularity = JSON.parse(JSON.stringify(contacts))
        contactsSortedByPopularity.sort((a,b) => b.popularity - a.popularity)
        updateContacts(contactsSortedByPopularity)
    }
    const removeContact = (id) => {
        let filteredContacts = contacts.filter((contact) => {
return contact.id !== id;
        })
        updateContacts(filteredContacts)
    }
    return(
<div>
      <h1>Ironcontacts</h1>
      <button onClick={getRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, i) => {
            return (
              <tr key={`${contact.id}${i}`}>
                <td>
                  <img
                    style={{ width: "56px" }}
                    src={contact.pictureUrl}
                    alt="contact"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  {contact.wonOscar ? (
                    <img
                      src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f3c6@2x.png"
                      alt="trophy"
                    />
                  ) : null}
                </td>
                <td>
                  {contact.wonEmmy ? (
                    <img
                      src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/1f3c6@2x.png"
                      alt="trophy"
                    />
                  ) : null}
                </td>
                <td>
                  <button onClick={() => removeContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
}
export default Contacts;
 