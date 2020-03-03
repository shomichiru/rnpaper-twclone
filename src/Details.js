//Detais.js
import React from "react";
import { DetailedTweet } from "./components/DetailedTweet";

export const Details = props => {
  return <DetailedTweet {...props.route.params} />;
};
