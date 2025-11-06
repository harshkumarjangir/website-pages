"use client";
import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react"; // Lucide icons for React

const FloatingContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch("/floatingContacts.json");
                const json = await res.json();
                setContacts(json.contacts || []);
            } catch (error) {
                console.error("Failed to load contacts:", error);
            }
        };
        fetchContacts();
    }, []);

    return (
        <div className="fixed right-4 bottom-6 md:bottom-1/2 md:translate-y-1/2 flex flex-col gap-3 z-50">
            {contacts.map((contact, i) => {
                const Icon = Icons[contact.icon]; // dynamically select icon
                return (
                    <a
                        key={i}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg text-white transition-all duration-300 ${contact.color} ${contact.hoverColor}`}
                    >
                        {Icon && <Icon size={22} />}
                    </a>
                );
            })}
        </div>
    );
};

export default FloatingContacts;
