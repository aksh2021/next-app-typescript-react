import React, { useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const Welcome = ({ user, router }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (!user) router.push("/login");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div style={{padding: '20px'}}>
      <div style={{ textAlign: 'center', fontSize: '50px'}}> {`Welcome ${user}!`}</div>
      <div>
        <Link href="/about">
          <a style={{ textDecoration: "underline", color: 'blue' }}>About Page</a>
        </Link>
      </div>
      <br />
      {posts.map((post, key) => {
        return (
          <div key={key}>
            <div style={{ textAlign: 'center', fontSize: '30px'}}> {`ID: ${post.id}`}</div>
            <div style={{ textAlign: 'center', fontSize: '25px'}}> {`Title: ${post.title}`}</div>
            <div style={{ fontSize: '20px'}}> {`Body: ${post.body}`}</div>
          </div>
        );
      })}
    </div>
  );
};


export function Home() {
  const router = useRouter();
  return (
    <AuthContext.Consumer>
      {({ user }) => <Welcome user={user} router={router} />}
    </AuthContext.Consumer>
  );
}

export default Home;