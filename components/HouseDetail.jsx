"use client";
import Link from "next/link";
import Carousel from "./Carousel";
import { CheckIcon, WhatsAppIcon } from "./icons";
import { formatPrice } from "@/lib/houses";

export default function HouseDetail({ house }) {
  const stats = [
    ["Capacidad", `${house.capacity} huéspedes`],
    ["Habitaciones", `${house.rooms} Cuartos`],
    ["Baños", `${house.bathrooms} baños`],
    ["Garaje", `${house.garage} autos`],
  ];
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "clamp(24px,4vh,44px) clamp(20px,5vw,48px) 0",
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <Link
          href="/#estancias"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid var(--line)",
            borderRadius: 999,
            padding: "8px 16px",
            fontSize: 14,
            fontWeight: 600,
            color: "#374151",
          }}
        >
          ← Todas las estancias
        </Link>
      </div>

      <Carousel house={house} big showThumbs rounded={20} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "clamp(28px,4vw,52px)",
          marginTop: "clamp(28px,4vh,44px)",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              letterSpacing: ".16em",
              color: "var(--accent)",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            {house.location}
          </p>
          <h1
            className="h-display"
            style={{
              margin: "6px 0 0",
              fontWeight: 700,
              fontSize: "clamp(2rem,4.5vw,3.2rem)",
              lineHeight: 1,
            }}
          >
            {house.name}
          </h1>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            {house.description}
          </p>
          <p
            style={{
              margin: "14px 0 0",
              fontSize: 16.5,
              lineHeight: 1.7,
              color: "#4b5563",
            }}
          >
            {house.description2}
          </p>

          <h3
            className="h-display"
            style={{ margin: "34px 0 16px", fontSize: "1.25rem" }}
          >
            Comodidades
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
              gap: 12,
            }}
          >
            {house.amenities.map((a) => (
              <div
                key={a}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 15,
                  color: "#374151",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(0,53,28,.08)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--accent)",
                    flex: "0 0 auto",
                  }}
                >
                  <CheckIcon />
                </span>
                {a}
              </div>
            ))}
          </div>

          <h3
            className="h-display"
            style={{ margin: "34px 0 14px", fontSize: "1.25rem" }}
          >
            Ubicación
          </h3>
          <div
            style={{
              position: "relative",
              aspectRatio: "21 / 9",
              borderRadius: 16,
              overflow: "hidden",
              background: "#f3f4f6",
              display: "grid",
              placeItems: "center",
              border: "1px solid var(--line)",
            }}
          >
            <span
              style={{
                fontFamily: "ui-monospace, Menlo, monospace",
                fontSize: 12.5,
                letterSpacing: ".1em",
                color: "rgba(17,24,39,.35)",
              }}
            >
              [ mapa · {house.location} ]
            </span>
          </div>
        </div>

        <aside>
          <div
            style={{
              position: "sticky",
              top: 88,
              background: "#ffffff",
              border: "1px solid var(--line)",
              borderRadius: 18,
              padding: 24,
              boxShadow: "0 4px 24px rgba(0,0,0,.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <b
                className="h-display"
                style={{ fontWeight: 700, fontSize: "2rem" }}
              >
                {formatPrice(house.price)}
              </b>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>
                / noche
              </span>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                margin: "20px 0",
                padding: "18px 0",
                borderTop: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
              }}
            >
              {stats.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: 1.1,
                  }}
                >
                  <small style={{ fontSize: 11, color: "var(--muted)" }}>
                    {label}
                  </small>
                  <b style={{ fontSize: 15, fontWeight: 600 }}>{value}</b>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/message/QI6KQE34NQOEE1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: 14,
                borderRadius: 12,
                background: "var(--accent)",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              <WhatsAppIcon size={18} /> Solicitar reserva
            </a>
            <Link
              href="/#estancias"
              style={{
                display: "block",
                textAlign: "center",
                marginTop: 10,
                padding: 13,
                borderRadius: 12,
                border: "1px solid var(--line)",
                fontWeight: 600,
                fontSize: 14.5,
                color: "#374151",
              }}
            >
              Ver otras estancias
            </Link>
          </div>
        </aside>
      </div>

      <div style={{ height: "clamp(56px,9vh,90px)" }} />
    </main>
  );
}
