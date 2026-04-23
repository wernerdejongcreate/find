import { useState, useEffect } from 'react';

export interface Listing {
  id: number;
  title: string;
  price: number;
  img: string;
  dist: number;
  verified: boolean;
  time: string;
  sellerScore: number;
  condition: string;
  isMine?: boolean;
  sold?: boolean;
  sponsored?: boolean;
  cashedOut?: boolean;
}

const DEFAULT_LISTINGS: Listing[] = [
  { id: 1, title: "Sony A7III Camera + Lens kit excellent condition", price: 1450, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=400", dist: 1.2, verified: true, time: "2h ago", sellerScore: 98, condition: "Like New" },
  { id: 2, title: "Herman Miller Aeron Chair Size B", price: 400, img: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=400", dist: 3.5, verified: true, time: "4h ago", sellerScore: 100, condition: "Good" },
  { id: 3, title: "MacBook Pro M1 2020 16GB RAM 512GB SSD", price: 750, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=400", dist: 0.8, verified: false, time: "5h ago", sellerScore: 85, condition: "Fair" },
  { id: 4, title: "Nintendo Switch OLED White Joycons", price: 280, img: "https://images.unsplash.com/photo-1622297843482-19e0edb8932c?auto=format&fit=crop&q=80&w=400", dist: 2.1, verified: true, time: "1d ago", sellerScore: 95, condition: "Like New" },
  { id: 5, title: "Yamaha Acoustic Guitar FG800", price: 150, img: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=400", dist: 5.0, verified: true, time: "2d ago", sellerScore: 92, condition: "Good" },
  { id: 6, title: "Vintage Leather Jacket Medium", price: 85, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400", dist: 1.5, verified: true, time: "3d ago", sellerScore: 100, condition: "Used - Vintage" },
];

export function useListings() {
  const [listings, setListings] = useState<Listing[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('findit_listings');
    if (stored) {
      setListings(JSON.parse(stored));
    } else {
      setListings(DEFAULT_LISTINGS);
      localStorage.setItem('findit_listings', JSON.stringify(DEFAULT_LISTINGS));
    }
  }, []);

  const addListing = (listing: Omit<Listing, 'id'>) => {
    const newListing = { ...listing, id: Date.now(), isMine: true };
    const updated = [newListing, ...listings];
    setListings(updated);
    localStorage.setItem('findit_listings', JSON.stringify(updated));
    return newListing;
  };

  const markAsSold = (id: number) => {
    const updated = listings.map(l => (l.id === id ? { ...l, sold: true } : l));
    setListings(updated);
    localStorage.setItem('findit_listings', JSON.stringify(updated));
  };

  const deleteListing = (id: number) => {
    const updated = listings.filter(l => l.id !== id);
    setListings(updated);
    localStorage.setItem('findit_listings', JSON.stringify(updated));
  };
  
  const cashOutFunds = () => {
    const updated = listings.map(l => {
      if (l.isMine && l.sold && !l.cashedOut) {
        return { ...l, cashedOut: true };
      }
      return l;
    });
    setListings(updated);
    localStorage.setItem('findit_listings', JSON.stringify(updated));
  };

  return { listings, addListing, markAsSold, deleteListing, cashOutFunds };
}
