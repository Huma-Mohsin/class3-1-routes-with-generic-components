import NavBar from "../../components/navbar";


export default function Home() {
  return (
    <div >
<NavBar/>
      <h1 style={{color:"Blue", textAlign:"left",textDecoration:"underline",fontSize:"50px",fontWeight:"bolder"}}>Introduction</h1>

      <h4 style={{color:"Green", fontSize:"20px"}}>Welcome to the Next.js !</h4>

      <br/>

      <h3 style={{color:"black", fontSize:"18px"}}>The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components. </h3>

     <br/>
                  ▲ ~ npx create-next-app@latest
<br/>
<h2 style={{color:"black", fontSize:"18px"}}>
  <br/>
What's in Next.js?
Everything you need to build great products on the web.</h2>
    </div>
  );
}
