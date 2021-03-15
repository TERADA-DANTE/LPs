import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link href="./">
          <a className="navbar-brand">
            <img src="/img/brand.svg" alt="brand-logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fe fe-x"></i>
          </button>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">Landings</li>
            <li className="nav-item dropdown">Pages</li>
            <li className="nav-item dropdown">Account</li>
            <li className="nav-item dropdown">Documentation</li>
          </ul>
          <Link href="https://themes.getbootstrap.com/product/landkit/">
            <a className="navbar-btn btn btn-sm btn-primary lift ml-auto" target="_blank">
              Buy now
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
