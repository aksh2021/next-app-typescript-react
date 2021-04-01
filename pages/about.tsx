import React, { useEffect } from "react";
import { AuthContext } from "../contexts/auth";
import { useRouter } from "next/router";
import Link from "next/link";
const AboutInfo = ({ user, router }) => {
  useEffect(() => {
    if (!user) router.push("/login");
  });
  return (
    <div>
      <Link href="/">
        <a style={{ textDecoration: "underline" }}>Home</a>
      </Link>
    </div>
  );
};

export const About = () => {
  const router = useRouter();
  return (
    <AuthContext.Consumer>
      {({ user }) => <AboutInfo user={user} router={router} />}
    </AuthContext.Consumer>
  );
};

export default About;