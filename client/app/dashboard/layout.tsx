import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div>dashboard layout</div>
      {children}
    </>
  );
};

export default layout;
