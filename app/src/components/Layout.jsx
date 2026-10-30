import { Outlet } from 'react-router-dom'
import Navigasi from './Navigasi.jsx'
import './Layout.css'

export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong>Belwis Suka Baca</strong>
        <Navigasi />
      </header>
      <main className="isi">
        <Outlet />
      </main>
      <footer className="kaki">
        <span>Ujian Tengah Semester Pengembangan Aplikasi Web</span>
        <span>Ridho Maulana Saputra</span>
      </footer>
    </div>
  )
}