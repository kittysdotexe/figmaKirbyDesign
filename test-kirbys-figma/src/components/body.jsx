import React from "react";
import "../style.css";
import { Recent } from "./music/recent";
import { Reviews } from "./music/reviews";
import { Song } from "./music/song";

export const Body = () => {
  return (
    <div>
        <Recent></Recent>
        <Reviews></Reviews>
        <Song></Song>
    </div>
  );
};
