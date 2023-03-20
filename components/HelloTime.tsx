"use client";

import useHelloSocket from "@/hooks/useHelloSocket";
import { useHelloQuery } from "@/store/HelloApi";

const HelloTime = () => {
  const { data, isLoading, isError } = useHelloQuery();
  useHelloSocket();
  return data ? (
    <div style={{ margin: "20px 0" }}>💿 Now Playing: {data.message}</div>
  ) : isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>An Error has Occured</div>
  ) : null;
};
export default HelloTime;
