import React from "react"
import Layout from "../components/layout/layout-component"

export default function About() {
  return (
    <Layout>
      <img src={require("../images/profile_pic.png")} className='profile-picture' alt={""}/>
      <p className='profile-highlight'>Christian | Husband | Developer</p>

      <h2 style={{ textAlign: "center" }}>Who is This Dude?</h2>
      <p>
        Hi, I’m Chase Hardin. I’m a Software Engineer in the Des Moines metro area and spent the past five years in tech. 
        Early into my career, I learned about Test Driven Development (TDD) and that have become a way of life for me. 
        A few of my favorite languages/frameworks to work with include React, Node, Angular, and Python.
      </p>
      <p>
        Outside of tech, I’m a husband to an amazing wife. I live on an acreage with chickens, cats, and my dog, Ranger. 
        I’m a woodworker and recently been building farmhouse style tables, garden benches, and cutting boards. 
        Other hobbies include hunting, fishing, horse riding, and playing guitar. A few of my favorite bands 
        include Zeppelin, Hendrix, and the Foo Fighters.
      </p>
      <h2 style={{ textAlign: "center" }}>The Purpose of This Blog</h2>
      <p>
        I’ve always enjoyed helping others learn new technologies and 
        this blog is just one way for me to contribute back to the developer community. On this blog, 
        I’ll be sharing my ideas, how I write code, and how I overcame technical problems. 
        How I develop is just one of many ways to write code so please don’t take these as absolutes. 
        These posts are meant to make us question our way of developing and writing code. 
      </p>
    </Layout>
  )
}
