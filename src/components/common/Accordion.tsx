'use client';

import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="border border-support-muted rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-right font-semibold text-primary-950 hover:bg-secondary-50 transition-colors flex items-center justify-between"
            aria-expanded={openItems.has(item.id)}
          >
            <span>{item.title}</span>
            <span className={`transform transition-transform ${openItems.has(item.id) ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openItems.has(item.id) && (
            <div className="px-6 py-4 bg-secondary-50 border-t border-support-muted text-primary-950">
              {typeof item.content === 'string' ? <p>{item.content}</p> : item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
