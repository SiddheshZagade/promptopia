import Feed from "@components/Feed";

const Home = () => {
    return (
     <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
          Discover & Share
      <br/>
      <span className="orange_gradient text-center">AI-Powered Prompts</span>
  
      </h1>
      <p className="desc text-center">
      Promptopia is a cutting-edge prompt sharing platform designed to facilitate the exchange and discovery of creative ideas. It serves as an online community where users can submit, explore, and engage with a wide range of prompts, sparking inspiration and fostering collaboration among writers, artists, and thinkers.
      </p>
      <Feed />
     </section>
    )
  }
  
  export default Home;
  
  