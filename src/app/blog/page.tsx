import BlogComponent from "../../../components/blogcomp";
import NavBar from "../../../components/navbar";


function BlogPage() {
    return (
        
        <div style={{ padding: "20px" }}>
            <NavBar/>
              <h1 style={{
                color: "black",
                textAlign: "left",
                textDecoration: "underline",
                fontSize: "50px",
                fontWeight: "bolder"
            }}>
               The latest Next.js news
            </h1>
          
            <BlogComponent
                text={`May 23rd, 2024

Next.js 15 RC
The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.

- React RC
- Caching defaults changes
- Incremental Partial Prerendering adoption
- next/after (Experimental)
- New create-next-app design
- Bundling external packages (Stable)`}/>

<BlogComponent
                text={`April 11th, 2024



Next.js 14.2
Next.js 14.2 includes development, production, and caching improvements.

- Turbopack (Release Candidate)
- Caching Improvements
- Build and Production Improvements
- Errors DX Improvements`}/>

<BlogComponent
                text={`January 18th, 2024



Next.js 14.1
Next.js 14.1 includes developer experience improvements including:

- Improved Self-Hosting
- Turbopack Improvements
- DX Improvements
- Parallel & Intercepted Routes
- next/image Improvements`}/>

<BlogComponent
                text={`May 23rd, 2024

Next.js 15 RC
The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.

- React RC
- Caching defaults changes
- Incremental Partial Prerendering adoption
- next/after (Experimental)
- New create-next-app design
- Bundling external packages (Stable)`}/>

<BlogComponent
                text={`May 23rd, 2024

Next.js 15 RC
The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.

- React RC
- Caching defaults changes
- Incremental Partial Prerendering adoption
- next/after (Experimental)
- New create-next-app design
- Bundling external packages (Stable)`}/>

<BlogComponent
                text={`May 23rd, 2024

Next.js 15 RC
The Next.js 15 Release Candidate (RC) is now available. This early version allows you to test the latest features before the upcoming stable release.

- React RC
- Caching defaults changes
- Incremental Partial Prerendering adoption
- next/after (Experimental)
- New create-next-app design
- Bundling external packages (Stable)`}/>
       </div>
    );
}

export default BlogPage;
