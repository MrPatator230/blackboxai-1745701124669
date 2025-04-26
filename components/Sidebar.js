import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../pages/_app';
import { SettingsContext } from '../contexts/SettingsContext';

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const { logout } = useContext(AuthContext);
  const { companyName } = useContext(SettingsContext);

  const navItems = [
    { href: '/admin', icon: 'fas fa-fw fa-tachometer-alt', label: 'Dashboard' },
    { href: '/admin/entreprise', icon: 'fas fa-fw fa-building', label: 'Entreprise' },
    { href: '/stations', icon: 'fas fa-fw fa-train', label: 'Gestion de gares' },
    { href: '/admin/horaires', icon: 'fas fa-fw fa-clock', label: 'Horaires' },
    { href: '/admin/materiels-roulants', icon: 'fas fa-fw fa-cogs', label: 'Matériels Roulants' },
    { href: '/admin/info-trafics', icon: 'fas fa-fw fa-info-circle', label: 'Infos Trafic' },
    { href: '/admin/attribution-voie', icon: 'fas fa-fw fa-map-signs', label: 'Attribution Voie' },
    { href: '/admin/type-horaires', icon: 'fas fa-fw fa-clock', label: 'Type Horaires' },
    { href: '/admin/sauvegarde', icon: 'fas fa-fw fa-save', label: 'Sauvegarde' },
    { href: '/admin/update', icon: 'fas fa-fw fa-sync-alt', label: 'Mise à jour' },
  ];

  const linkCount = navItems.length;

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <ul
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion d-flex flex-column ${
        linkCount < 8 ? 'justify-content-center' : 'justify-content-start overflow-auto'
      }`}
      id="accordionSidebar"
      style={{ minHeight: '100vh', position: 'sticky', top: 0 }}
    >
      <Link href="/admin" className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon">
          <i className="fas fa-train"></i>
        </div>
        <div className="sidebar-brand-text mx-3">{companyName}</div>
      </Link>
      <hr className="sidebar-divider my-0" />
      {navItems.map(({ href, icon, label }) => (
        <li key={href} className={`nav-item ${currentPath === href ? 'active' : ''}`}>
          <Link href={href} className="nav-link">
            <i className={icon}></i>
            <span>{label}</span>
          </Link>
        </li>
      ))}
      <hr className="sidebar-divider mt-auto" />
      <li className="nav-item">
        <a href="#" onClick={handleLogout} className="nav-link">
          <i className="fas fa-sign-out-alt"></i>
          <span>Déconnexion</span>
        </a>
      </li>
    </ul>
  );
}
