
import React from "react";

const BPS_URL =
  "https://www.bps.go.id/assets/statistics-table/2/MjM2OCMy/suku-bunga-deposito-berjangka-bank-umum.html";

export default function Deposito() {
  return (
    <div style={{
      maxWidth: "1200px",
      margin: "auto",
      padding: "24px",
      fontFamily: "Arial, sans-serif",
      color: "#1e293b"
    }}>

      <h1>Suku Bunga Deposito Indonesia</h1>

      <p style={{ color: "#64748b" }}>
        Data statistik resmi Badan Pusat Statistik (BPS)
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "12px",
        margin: "24px 0"
      }}>
        {["1 Bulan", "3 Bulan", "6 Bulan", "12 Bulan", "24 Bulan"].map(t => (
          <div key={t} style={{
            padding: "18px",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            background: "#f8fafc",
            textAlign: "center"
          }}>
            <strong>{t}</strong>
            <p style={{ fontSize: "12px", color: "#64748b" }}>
              Tenor deposito
            </p>
          </div>
        ))}
      </div>

      <div style={{
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        overflow: "hidden"
      }}>
        <div style={{
          padding: "16px",
          background: "#f1f5f9"
        }}>
          <strong>Data Suku Bunga Deposito Berjangka Bank Umum</strong>
          <p style={{ marginBottom: 0, fontSize: "13px" }}>
            Satuan: Persen per tahun
          </p>
        </div>

        <iframe
          src={BPS_URL}
          title="Data Suku Bunga Deposito BPS"
          width="100%"
          height="850"
          style={{ border: 0 }}
        />

        <div style={{ padding: "16px" }}>
          Jika tabel tidak muncul, silakan buka sumber resmi:
          <br />
          <a
            href={BPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2563eb" }}
          >
            Buka Data Deposito BPS ↗
          </a>
        </div>
      </div>

      <p style={{
        marginTop: "20px",
        fontSize: "12px",
        color: "#64748b"
      }}>
        Sumber: Badan Pusat Statistik (BPS), bersumber dari Bank Indonesia.
        Data merupakan rata-rata suku bunga bank umum, bukan penawaran
        deposito dari setiap bank.
      </p>

    </div>
  );
}
