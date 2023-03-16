import NavItem from "./NavItem";

function Nav(props) {
  const { navItems } = props;
  const navList = [];
  navItems.forEach(item => {
    navList.push(
      <NavItem
        key={item.href}
        href={item.href}
        target={item.target}
        displayText={item.displayText}
      />
    );
  });
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Kutyák
        </a>
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
          <ul className="navbar-nav">
            {navList}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;