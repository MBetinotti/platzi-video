import React from "react";
import "../assets/styles/components/Categories.scss";

export default function Categories({ children, title }) {
  return (
    <div>
      <h3 class="categories__title">{title}</h3>
      {children}
    </div>
  );
}
