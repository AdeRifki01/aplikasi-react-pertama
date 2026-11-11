import { useState } from "react";

function SkillList() {
    const skills = ["HTML & CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"];

    return (
        <div className="card">
            <h3>Daftar Materi Keahlian</h3>
            <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
                {skills.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillList;
