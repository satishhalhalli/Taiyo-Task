import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  deleteContact,
  updateContact,
} from "../redux/addContectSlice";
import Header from "./Header";

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.app.contacts);
  const [showform, setShowform] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    status: "active",
  });

  const [editingIndex, setEditingIndex] = useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingIndex !== -1) {
      const updatedContacts = [...contacts];
      updatedContacts[editingIndex] = formData;
      // dispatch(addContact({ formData, index: editingIndex }));
      dispatch(updateContact({ formData, index: editingIndex }));

      setEditingIndex(-1);
    } else {
      dispatch(addContact(formData));
    }

    setFormData({
      firstName: "",
      lastName: "",
      contact: "",
      status: "active",
    });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const editingContact = contacts[index];
    setFormData(editingContact);
  };

  const handleDelete = (index) => {
    console.log("delete index", index);
    dispatch(deleteContact(index));
  };
  return (
    <>
      <Header title="Contact Page" />
      <div className="ml-48 p-10 bg-slate-50 ">
        <div className="p-5 flex flex-col justify-center items-center">
          <button
            className="bg-slate-200 text-3xl font-bold text-black p-2 rounded-md shadow-sm"
            onClick={() => setShowform(true)}
          >
            Create contact
          </button>

          {contacts.length === 0 ? (
            <div className="w-[60%] bg-slate-200 border border-black h-48 m-10 flex flex-col justify-center items-center rounded-md shadow-sm">
              <h1 className="text-3xl font-bold text-black">
                No contacts found
              </h1>
              <h1 className="text-3xl font-bold text-black">
                pls add a contact from
              </h1>
              <h1 className="text-3xl font-bold text-black">
                create contact button
              </h1>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        {showform && (
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              id="form"
              className="bg-white p-6 rounded-lg shadow-lg w-[75%] border border-gray-200 "
            >
              <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                X
              </button>
              <label className="block mb-2 text-gray-700 text-2xl font-medium">
                First Name:
              </label>
              <input
                type="text"
                id="name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <label className="block mt-4 mb-2 text-gray-700 text-2xl font-medium">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />

              <label className="block mt-4 mb-2 text-gray-700 text-2xl font-medium">
                Contact no
              </label>
              <input
                type="number"
                id="contact"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <label className="block mt-4 mb-2 text-gray-700 text-2xl font-medium">
                Status:
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="statusActive"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={() =>
                    setFormData({ ...formData, status: "active" })
                  }
                  className="border rounded focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="statusActive">Active</label>
                <input
                  type="checkbox"
                  id="statusInactive"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive"}
                  onChange={() =>
                    setFormData({ ...formData, status: "inactive" })
                  }
                  className="border rounded focus:outline-none focus:border-blue-500"
                />
                <label htmlFor="statusInactive">Inactive</label>
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue"
              >
                {editingIndex !== -1 ? "Update Contact" : "Save Contact"}
              </button>
            </form>
          </div>
        )}
        <div className="mt-4 flex ">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="border p-4 m-3 w-60 rounded-md shadow-md font-medium "
            >
              <div>First Name: {contact.firstName}</div>
              <div>Last Name: {contact.lastName}</div>
              <div>Contact: {contact.contact}</div>
              <div>Status: {contact.status}</div>
              <div className="flex justify-between">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mt-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
