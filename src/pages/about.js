import React from "react"
import Layout from "../components/layout/layout-component"

export default function About() {
  return (
    <Layout>
      <img src={require("../images/profile_pic.png")} className='profile-picture' alt={""}/>
      <p className='profile-highlight'>Christian | Husband | Developer</p>

      <h2 style={{ textAlign: "center" }}>Who is This Dude?</h2>
      <p>
        As I’m sure you can guess, my name is Chase Hardin and I’m a Software Engineer in the Des Moines metro area.
        I’ve spent the past four years in tech building web based applications and I enjoy the challenge of learning new
        programming languages. Each new language teaches me something and helps me solve problems better. Early on in my
        career, I learned about Test Driven Development (TDD) and that has become a way of life for me. A few of my
        favorite languages/frameworks to develop in include C#/.NET, Python, Angular, React, and Node.js.
      </p>
      <p>
        Outside of tech, I am a husband to an amazing wife and in search of the perfect acreage. I’m a guitarist with a
        love for a great groove. A few of my favorites include Jimi Hendrix, Zeppelin, and the Foo Fighters if that
        gives you any idea of my musical influences. I’m also an avid outdoorsman who enjoys hunting, fishing, camping,
        and horse riding.
      </p>

      <h2 style={{ textAlign: "center" }}>Why Read?</h2>
      <p>
        I’ve always found great joy in sharing with others and the blog is just one way for me to contribute back to the
        developer community. In this blog, I’ll be sharing my ideas, discoveries, and ways of writing code. How I
        develop is just one of many ways to write code so please don’t take these as absolutes. These posts are meant to
        make us question our way of developing and writing code.
      </p>
    </Layout>
  )
}
