import { useState } from "react";

function GreetingForm() {
    const [nama, setNama] = useState("");

    return (
        <div style={{ margin: "20px 0" }}>
            <input type="text" placeholder="Masukkan Nama Anda" value={nama} onChange={(e) => setNama(e.target.value)} className="input-teks" />
            <p>Halo, {nama || "Tamu"}!</p>
        </div>
    );
}

export default GreetingForm;
