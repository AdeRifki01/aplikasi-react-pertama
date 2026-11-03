import {useState} from 'react';

function Counter() {
     const [hitung, setHitung] = useState(0);

return (
     <div style={{ margin : '20px 0' }}>
          <h3>Komponen hitungan : {hitung}</h3>
          <button className="btn" onClick={() => setHitung(hitung + 1)}>
               Tambah Angka
          </button>
     </div>
);
}

export default Counter