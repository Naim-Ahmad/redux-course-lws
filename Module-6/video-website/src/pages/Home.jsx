import Posts from '../components/posts/Posts.jsx'
import SortFilterSection from '../components/sortFilterSection/SortFilterSection.jsx'

export default function Home() {

  return (
    <section className="wrapper">
      <SortFilterSection/>

      {/* <!-- posts container  --> */}
     <Posts/>
    </section>
  )
}