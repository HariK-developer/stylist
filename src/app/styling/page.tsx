"use client";

import Gallery from "@/components/gallery";
import Loader from "@/components/loader";
import { useState, useEffect } from "react";

export default function Styling() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{isLoading ? <Loader /> : <Gallery />}</>;
}
