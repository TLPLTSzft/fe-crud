function NavItem(props) {
  const { href, target, displayText } = props;
  return (
    <li className="nav-item">
      <a className="nav-link"
        href={href}
        target={target}>
        {displayText}
      </a>
    </li >
  );
}

export default NavItem;