import React, { useState } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");
  const [editingContactId, setEditingContactId] = useState(null);

  const addContact = () => {
    if (name && phone) {
      const newContact = {
        id: Date.now(),
        name,
        phone,
        photo,
      };

      setContacts([...contacts, newContact]);
      setName("");
      setPhone("");
      setPhoto("");
    }
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleEditChange = (e, id, field) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return { ...contact, [field]: e.target.value };
      }
      return contact;
    });
    setContacts(updatedContacts);
  };

  const saveEditedContact = (id) => {
    setEditingContactId(null);
  };

  return (
    <div className="App">
      <h1>Contact Book</h1>
      <div className="inputs">
        <input
          className="inp"
          type="search"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inp"
          type="search"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="inp"
          type="search"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button className="btnAdd" onClick={addContact}>
          Добавить контакт
        </button>
      </div>
      <div className="contact-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact">
            {editingContactId === contact.id ? (
              <div className="edit_inp_container">
                <input
                  className="edit_inp"
                  type="search"
                  value={contact.name}
                  onChange={(e) => handleEditChange(e, contact.id, "name")}
                />
                <input
                  className="edit_inp"
                  type="search"
                  value={contact.phone}
                  onChange={(e) => handleEditChange(e, contact.id, "phone")}
                />
                <input
                  className="edit_inp"
                  type="search"
                  value={contact.photo}
                  onChange={(e) => handleEditChange(e, contact.id, "photo")}
                />
                <button
                  className="save_btn"
                  onClick={() => saveEditedContact(contact.id)}
                >
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="cards_container">
                <div className="card">
                  <div>
                    <p className="aaa">{contact.name}</p>
                    <p className="aaa">{contact.phone}</p>
                  </div>
                  <div className="card_desc">
                    <img
                      className="card_img"
                      src={contact.photo}
                      alt={contact.name}
                    />
                    <div className="card_btns">
                      <button
                        className="edit_btn"
                        onClick={() => setEditingContactId(contact.id)}
                      >
                        Изменить
                      </button>
                      <button
                        className="delete_btn"
                        onClick={() => deleteContact(contact.id)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;