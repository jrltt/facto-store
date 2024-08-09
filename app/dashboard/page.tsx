import Link from "next/link";

export default async function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/products">Products</Link>
          </li>
          <li>
            <Link href="/dashboard/parts">Parts & Part options</Link>
          </li>
          <li>
            <Link href="/dashboard/users">Users</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
