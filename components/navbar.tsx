import Image from 'next/image';  // Import Next.js Image component

function NavBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", backgroundColor: "lightgrey", padding: "2px", borderRadius: "2px" }}>
      {/* Logo placed on the left */}
      <Image 
        src="/nextjs2106.logowik.com.webp"  
        alt="Next.js logo" 
        width={50} 
        height={50} 
        style={{ marginRight: "20px" }}  // Adds some space between the logo and nav links
      />
      
      <ul style={{ listStyle: "none", display: "flex", gap: "20px"}}>
        <li style={{ color: "black", padding: "2px" }}>
          <a href="/Showcase">Showcase</a>
        </li>

        <li style={{ color: "black", padding: "2px" }}>
          <a href="/Docs">Docs</a>
        </li>

        <li style={{ color: "black", padding: "2px" }}>
          <a href="/Blog">Blog</a>
        </li>

        <li style={{ color: "black", padding: "2px" }}>
          <a href="/Templates">Templates</a>
        </li>

        <li style={{ color: "black", padding: "2px" }}>
          <a href="/Enterprise">Enterprise</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
