import React from "react"
import Layout from "../components/layout/layout-component"

export default function About() {
  return (
    <Layout>
      <img src={require("../images/profile_pic.png")} className='profile-picture' alt={''}/>
      <h2 style={{textAlign: "center"}}>Who is this dude?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna velit, ullamcorper nec diam in,
        ultrices pretium mauris. Nulla ut eleifend risus. Mauris blandit nisl a nibh gravida tincidunt. Donec interdum,
        turpis nec convallis aliquet, leo eros vulputate turpis, id dignissim turpis sapien eget leo. Suspendisse
        potenti. Praesent finibus leo mi, vel ullamcorper quam malesuada eget. Nulla vel tempus tellus. Donec hendrerit
        tempus ex at volutpat. Nunc semper nibh at sapien condimentum, sed elementum libero faucibus. Nam nisi massa,
        semper elementum efficitur vel, congue a sapien. Sed diam sem, pretium et sem bibendum, pretium ullamcorper
        diam. Integer molestie nisi eu nisl pellentesque, vitae lobortis sem pulvinar.
      </p>
      <p>
        Praesent iaculis vestibulum dui id ultrices. Cras turpis lorem, accumsan sodales varius quis, molestie sit amet
        metus. Nulla id mauris quis tortor maximus pharetra. Pellentesque nec porta neque. In blandit velit at lacus
        viverra pulvinar. Proin congue est non nibh bibendum, at aliquet sem consequat. Duis mattis sem euismod, semper
        ipsum a, interdum mauris. Mauris mollis rhoncus diam id vulputate. Nulla in mauris fermentum, vestibulum sapien
        sit amet, pellentesque velit.
      </p>

      <p>Aenean sollicitudin et velit ac ultricies. Donec commodo nunc neque, eget ultricies quam pretium non. Nam
        tristique ac justo a pharetra. Nullam accumsan massa eget massa interdum, vitae malesuada dolor sodales. Nulla
        cursus tortor sem, non venenatis libero vestibulum quis. Fusce pulvinar porta ante non iaculis. Duis
        sollicitudin elementum vulputate.
      </p>

      <p>
        Quisque rutrum interdum fringilla. In hac habitasse platea dictumst. Mauris mollis lectus et felis lacinia
        auctor. Phasellus nec rhoncus sem, nec dapibus ex. Aenean id ante ullamcorper, dignissim nisl vel, iaculis
        tellus. Maecenas at maximus justo. Praesent ullamcorper vestibulum diam quis tempus.
      </p>

      <p>
        Curabitur ornare a libero a ultrices. Vivamus feugiat ligula nec ultricies rhoncus. Sed pulvinar purus vitae
        efficitur rhoncus. Duis neque velit, tincidunt non mi sit amet, faucibus sollicitudin diam. Morbi gravida
        tristique laoreet. Morbi sed nibh ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Donec eleifend sapien vitae quam malesuada mattis. Phasellus eu tincidunt erat. Duis
        feugiat vitae eros non rutrum. Nullam commodo leo eget placerat iaculis. In porta fringilla mi, a cursus orci
        bibendum in. Integer sit amet neque vel ante vulputate iaculis ac vulputate sem. In tincidunt ex at orci dictum,
        commodo fermentum odio luctus. Proin diam tellus, fringilla id velit id, ornare accumsan eros.
      </p>
    </Layout>
  )
}
