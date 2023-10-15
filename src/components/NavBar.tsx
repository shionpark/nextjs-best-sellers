import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className={router.pathname === "/about" ? "active" : ""}>
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        nav {
          background-color: black;
          color: white;
          padding: 20px 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          text-transform: uppercase;
          font-weight: 800;
        }
        ul {
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
        }
        li {
          font-size: 20px;
          padding: 0 20px;
        }
        .active {
          color: red;
        }
      `}</style>
    </>
  );
}
