"use client";

import React, { useEffect, useState } from "react";
import Introduction from "./components/Introduction/Introduction";
import defaultLabels from "../fallback/labels";
import defaultConfigs from "../fallback/configs";

export default function Home() {
  const [labels, setLabels] = useState<any[]>([]);
  const [configs, setConfigs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [labelsResponse, configsResponse] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/labels`),
          fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/configs`),
        ]);

        const labels = await labelsResponse.json();
        const configs = await configsResponse.json();

        setLabels(labels.success ? labels.data : [defaultLabels]);
        setConfigs(configs.success ? configs.data : [defaultConfigs]);
      } catch (err) {
        setLabels([defaultLabels]);
        setConfigs([defaultConfigs]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(labels, configs);

  if (loading) return <p>Loading...</p>;

  return <Introduction labels={labels[0]} configs={configs[0]} />;
}
