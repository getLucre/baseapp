import Address from "@site/src/components/Address";
import Footer from "@theme-original/Footer";
import React from "react";

export default function FooterWrapper(props: any) {
  return (
    <>
      <Address />
      <Footer {...props} />
    </>
  );
}
