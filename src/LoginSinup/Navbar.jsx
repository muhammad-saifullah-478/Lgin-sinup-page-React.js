function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a className="head">Explor</a>
            {/* <a href="/">Sinup</a> */}
            {/* <a href="/home">Home</a> */}
            <a href="/login">Login</a>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
