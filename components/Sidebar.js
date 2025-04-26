import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { AuthContext } from '../pages/_app';
import { SettingsContext } from '../contexts/SettingsContext';

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.pathname;
  const { logout } = useContext(AuthContext);
  const { companyName } = useContext(SettingsContext);
  const [isSettingsMenuOpen, setSettingsMenuOpen] = useState(false);

  const navItems = [
    { href: '/admin', icon: 'fas fa-fw fa-tachometer-alt', label: 'Dashboard' },
    { href: '/admin/entreprise', icon: 'fas fa-fw fa-building', label: 'Entreprise' },
    { href: '/stations', icon: 'fas fa-fw fa-train', label: 'Gestion de gares' },
    { href: '/admin/horaires', icon: 'fas fa-fw fa-clock', label: 'Horaires' },
    { href: '/admin/materiels-roulants', icon: 'fas fa-fw fa-cogs', label: 'Matériels Roulants' },
    { href: '/admin/info-trafics', icon: 'fas fa-fw fa-info-circle', label: 'Infos Trafic' },
    { href: '/admin/attribution-voie', icon: 'fas fa-fw fa-map-signs', label: 'Attribution Voie' },
    { href: '/admin/type-horaires', icon: 'fas fa-fw fa-clock', label: 'Type Horaires' },
  ];

  const settingsSubItems = [
    { href: '/admin/sauvegarde', label: 'Sauvegarde' },
    { href: '/admin/update', label: 'Mise à jour' },
  ];

  const linkCount = navItems.length + (isSettingsMenuOpen ? settingsSubItems.length : 0);

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

      {/* Paramètres Système folder */}
      <li className="nav-item">
        <a
          href="#!"
          className="nav-link d-flex justify-content-between align-items-center"
          onClick={(e) => {
            e.preventDefault();
            setSettingsMenuOpen(!isSettingsMenuOpen);
          }}
          aria-expanded={isSettingsMenuOpen}
          aria-controls="settingsSubMenu"
        >
          <span>
            <i className="fas fa-cogs fa-fw"></i>
            <span className="ml-2">Paramètres Système</span>
          </span>
          <i className={`fas fa-chevron-${isSettingsMenuOpen ? 'down' : 'right'}`}></i>
        </a>
        {isSettingsMenuOpen && (
          <ul className="submenu list-unstyled pl-4" id="settingsSubMenu">
            {settingsSubItems.map(({ href, label }) => (
              <li key={href} className={`nav-item ${currentPath === href ? 'active' : ''}`}>
                <Link href={href} className="nav-link">
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>

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
