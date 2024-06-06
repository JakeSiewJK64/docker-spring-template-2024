import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div>users layout</div>
      {children}
    </>
  );
};

export default layout;
