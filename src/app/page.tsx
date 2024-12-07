"use client";

import React, { useEffect, useState } from "react";
import Introduction from "./components/Introduction/Introduction";
import defaultLabels from "../fallback/labels"

export default function Home() {
  const [labels, setLabels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLabels = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/temp`);
        const labels = await response.json();

        if (labels.success) {
          setLabels(labels.data);
        } else {
          setLabels([defaultLabels]);
        }
      } catch (err: any) {
        setLabels([defaultLabels])
      } finally {
        setLoading(false);
      }
    };

    fetchLabels();
  }, []);


  if (loading) return <p>Loading...</p>;

  return (
    <Introduction labels={labels[0]}/>
  );
}
