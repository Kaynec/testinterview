import React from "react";

export default function Header() {
  const [mobileNav, setMobileNav] = React.useState(false);

  const [menu, setMenu] = React.useState(false);

  return (
    <>
      {/* header and left side menu trigger trigger */}
      <header>
        <a onClick={() => setMenu((p) => !p)}>MENU</a>
        {/* mobile trigger */}
        <a
          href="#"
          className="mobile-trigger"
          onClick={() => setMobileNav((p) => !p)}
        >
          MOBILE MENU
        </a>

        <nav>
          <a href=""> ITEM1 </a>
          <a href=""> ITEM2 </a>
          <a href=""> ITEM3 </a>
          <a href=""> ITEM4 </a>
        </nav>
      </header>
      {/* mobile menu  */}

      <div className={mobileNav ? "mobile visible" : "mobile"}>
        <div>
          <a href=""> ITEM1 </a>
        </div>
        <div>
          <a href=""> ITEM2 </a>{" "}
        </div>

        <a href=""> ITEM3 </a>
        <div> </div>

        <a href=""> ITEM4 </a>
        <div> </div>
      </div>
      {/* left side menu  */}
      <div className="menu" style={{ display: menu ? "flex" : "none" }}>
        <ul>
          <li>
            <details>
              <summary>
                <a>SETTINGS1</a>{" "}
              </summary>
              <ul>
                <li>
                  <a href=""> item1</a>
                </li>
                <li>
                  <a href=""> item2</a>
                </li>
                <li>
                  <a href=""> item3 </a>{" "}
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>
                <a>TRADE1</a>
              </summary>
              <ul>
                <li>
                  <a href=""> item1</a>
                </li>
                <li>
                  <a href=""> item2</a>
                </li>
                <li>
                  <a href=""> item3 </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        <a className="close" onClick={() => setMenu(false)}>
          CLOSE
        </a>
      </div>
    </>
  );
}
