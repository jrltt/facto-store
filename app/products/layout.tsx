export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>Header</div>
      <div className="mx-auto grid w-full max-w-7xl gap-2 my-4">{children}</div>
    </>
  );
}
