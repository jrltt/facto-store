import Header from "@/components/ui/header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mx-auto grid w-full max-w-7xl gap-2 my-4">{children}</div>
    </>
  );
}
