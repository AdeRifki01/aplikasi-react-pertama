import { useState } from "react";
import "../css/profileCard.css";

function ProfileCard() {
    // State untuk nama dan pekerjaan
    const [nama, setNama] = useState("Ade Rifki");
    const [pekerjaan, setPekerjaan] = useState("Web Developer");
    const [isOnline, setIsOnline] = useState(true);

    // State untuk jumlah likes
    const [likes, setLikes] = useState(0);

    return (
        <div className="profile-card">
            <div className="profile-header">
                <div className="profile-avatar">{nama.charAt(0).toUpperCase()}</div>

                <h2>{nama}</h2>
                <p>{pekerjaan}</p>
            </div>

            <div className="profile-form">
                <label>Nama</label>
                <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan nama" />

                <label>Profesi / Pekerjaan</label>
                <input type="text" value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} placeholder="Masukkan pekerjaan" />
            </div>

            <div className="profile-footer">
                <button className="like-button" onClick={() => setLikes(likes + 1)}>
                    ♥ Suka ({likes})
                </button>
            </div>
            <div className="card-profile">
                <span style={{ color: isOnline ? "#16a34a" : "#64748b" }}>{isOnline ? "Online" : "Offline"}</span>
                <button onClick={() => setIsOnline(!isOnline)}>Ganti Status</button>
            </div>
        </div>
    );
}

export default ProfileCard;
