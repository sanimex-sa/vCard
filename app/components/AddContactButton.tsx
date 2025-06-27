"use client";
import React from "react";

// Définition d’un type contact
type Contact = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company?: string;
  jobTitle?: string;
};

const contact: Contact = {
  firstName: "yns",
  lastName: "elm",
  phone: "+32 490 35 86 13",
  email: "jean.dupont@example.com",
  company: "Sanimex",
  jobTitle: "Commercial",
};

const createVCard = (contact: Contact) => {
  return `
BEGIN:VCARD
VERSION:3.0
N:${contact.lastName};${contact.firstName};;;
FN:${contact.firstName} ${contact.lastName}
TEL;TYPE=CELL,VOICE:${contact.phone}
EMAIL:${contact.email}
END:VCARD
  `.trim();
};

export default function AddContactButton() {
  const handleClick = () => {
    const vcard = createVCard(contact);
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${contact.firstName}_${contact.lastName}.vcf`;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleClick} style={{ padding: "10px 20px" }}>
      Ajouter ce contact
    </button>
  );
}
