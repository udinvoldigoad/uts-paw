import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Sastra Indonesia', penulis: '', tahunTerbit: '', status: 'Dimiliki' }

export default function Tambah() {  
    const konteks = useKoleksi()
    const { tambah } = konteks
    
    const daftarBuku = Object.values(konteks).find(Array.isArray) || []

    const navigate = useNavigate()
    const [form, setForm] = useState(AWAL)
    const [galat, setGalat] = useState('')
    
    const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const simpan = (e) => {
        e.preventDefault()
        if (form.judul.trim().length < 3 ) {
            setGalat('Judul wajib diisi, minimal 3 karakter.')
            return
        } 
        tambah({ ...form, judul: form.judul.trim() })
        navigate('/koleksi')
    }
    
    return (
        <form id="form-tambah" className="formulir" onSubmit={simpan} noValidate>
            <h1>Tambah Buku</h1>

            <label htmlFor="judul">Judul</label>
            <input id="judul" name="judul" value={form.judul} onChange={ubah} />
            {galat && <p role="alert">{galat}</p>}

            <label htmlFor="kategori">Kategori</label>
            <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
                <option>Sastra Indonesia</option>
                <option>Pengembangan Diri</option>
                <option>Filsafat</option>
                <option>Fiksi Sejarah</option>
                <option>Sejarah / Sains</option>
                <option>Novel Filsafat</option>
            </select>

            <label htmlFor="penulis">Penulis</label>
            <input id="penulis" name="penulis" value={form.penulis} onChange={ubah}/>

            <label htmlFor="tahunTerbit">Tahun Terbit</label>
            <input id="tahunTerbit" name="tahunTerbit" value={form.tahunTerbit} onChange={ubah}/>

            <label htmlFor="status">Status</label>
            <select id="status" name="status" value={form.status} onChange={ubah}>
                <option>Dimiliki</option>
                <option>Sedang dibaca</option>
                <option>Ingin dibeli</option>
            </select>

            <button type="submit">Simpan</button>
                <p>
                    <strong>Isi state form saat ini</strong>{"\n"}
                    {JSON.stringify(form, null, 2)}{"\n\n"}
                    <strong>Item tersimpan ({daftarBuku.length})</strong>{"\n"}
                    {daftarBuku.length === 0 
                        ? "Belum ada. Di aplikasimu, setelah Simpan kamu dipindahkan ke /koleksi." 
                        : `Sudah ada ${daftarBuku.length} buku di dalam koleksi.`}
                </p>
        </form>
  )
}