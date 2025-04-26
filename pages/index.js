import Link from 'next/link';
import { useState, useEffect } from 'react';

const impactTypeColors = {
  Retard: 'bg-warning text-dark',
  Suppression: 'bg-danger',
  Information: 'bg-primary',
  Modification: 'bg-info text-dark',
};

export default function Home() {
  const [trafficInfos, setTrafficInfos] = useState([]);
  const [newsPosts, setNewsPosts] = useState([]);

  useEffect(() => {
    const savedTrafficInfos = localStorage.getItem('trafficInfos');
    if (savedTrafficInfos) {
      setTrafficInfos(JSON.parse(savedTrafficInfos));
    }
    const savedNews = localStorage.getItem('newsPosts');
    if (savedNews) {
      setNewsPosts(JSON.parse(savedNews));
    }
  }, []);

  const recentNews = newsPosts.slice(0, 3);

  return (
    <>
      <header className="bg-white shadow mb-4">
        <nav className="container navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand fw-bold" href="#">TER Bourgogne - Franche-Comté</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link active" aria-current="page">Accueil</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/horaires-par-gares" legacyBehavior>
                  <a className="nav-link">Horaires</a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/actualites">Actualités</a>
              </li>
              <li className="nav-item">
                <Link href="/prochains-departs" legacyBehavior>
                  <a className="nav-link">Prochains Départs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/abonnements-et-billets" legacyBehavior>
                  <a className="nav-link">Abonnements et Billets</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login" legacyBehavior>
                  <a className="btn btn-outline-success ms-3">Se connecter</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="container my-5">
        <h1 className="display-4 mb-4 text-center">Bienvenue sur le site TER Bourgogne - Franche-Comté</h1>
        <p className="lead text-center mb-5">Site en cours de développement</p>

        <section className="mb-5">
          <h2 className="mb-3">Infos Trafic</h2>
          {trafficInfos.length === 0 ? (
            <p>Aucune info trafic disponible actuellement.</p>
          ) : (
            <div className="list-group">
              {trafficInfos.map(info => (
                <div key={info.id} className="list-group-item">
                  <h5>{info.title}</h5>
                  <p>
                    {info.startDate || '-'} {info.endDate ? `à ${info.endDate}` : ''}
                  </p>
                  <p>{info.description}</p>
                  <p>
                    <span className={`badge ${impactTypeColors[info.impactType] || 'bg-secondary'}`}>
                      {info.impactType}
                    </span>
                  </p>
                  <p><strong>Horaires impactés:</strong> {info.impactedTrains.length === 0 ? '-' : info.impactedTrains.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mt-5">
          <h2>Dernières actualités</h2>
          {recentNews.length === 0 ? (
            <p>Aucune actualité disponible.</p>
          ) : (
            <div className="list-group">
              {recentNews.map(post => (
                <Link key={post.id} href={`/actualites/${post.id}`} legacyBehavior>
                  <a className="list-group-item list-group-item-action">
                    <h5>{post.title}</h5>
                    <small className="text-muted">{new Date(post.date).toLocaleDateString()}</small>
                    <p>{post.content.length > 100 ? post.content.substring(0, 100) + '...' : post.content}</p>
                  </a>
                </Link>
              ))}
            </div>
          )}
          <div className="mt-3">
            <Link href="/actualites" legacyBehavior>
              <a>Voir toutes les actualités</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
