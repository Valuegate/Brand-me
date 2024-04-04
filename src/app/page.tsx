// import NavBar from '@/components/resuable/NavBar/NavBar'

// export default function Home() {
//   return (
//     <>
//     <NavBar index={-1} />
//     <h1>Home Page</h1>
//     </>
//   );
// }


import AboutUsPage from "@/components/about/About";


export const metadata = {
  title: "About Us",
};

export default function About() {
  return <AboutUsPage />
}