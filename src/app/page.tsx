"use client";

import React, { useEffect, useState } from "react";
import Introduction from "./components/Introduction/Introduction";
import defaultLabels from "../fallback/labels"
import defaultConfigs from "../fallback/configs"

export default function Home() {
  const [labels, setLabels] = useState<any[]>([]);
  const [configs, setConfigs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLabels = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/labels`);
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

  useEffect(() => {
    const fetchConfigs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/configs`);
        const configs = await response.json();

        if (configs.success) {
          setConfigs(configs.data);
        } else {
          setConfigs([{resumeLink:"/"}]);
        }
      } catch (err: any) {
        setConfigs([defaultConfigs])
      } finally {
        setLoading(false);
      }
    };

    fetchConfigs();
  }, []);


  if (loading) return <p>Loading...</p>;

  return (
    <Introduction labels={labels[0]} configs={configs[0]}/>
  );
}
