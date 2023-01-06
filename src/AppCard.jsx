import React from "react";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>
      <Card>
        <h1>Card2</h1>
        <p>설명</p>
      </Card>
      <Card>
        <article></article>
      </Card>
    </>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#000",
        borderRadius: 20,
        color: "#fff",
        minHeight: 200,
        maxWidth: 200,
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}
