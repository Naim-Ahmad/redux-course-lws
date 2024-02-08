import Jobs from '../components/jobs/Jobs.jsx';
import Layout from "../components/layout/Layout";
import Main from '../components/layout/Main.jsx';

export default function Home() {

  return (
    <Layout>
      <Main>  
        <Jobs />
      </Main>
    </Layout>
  )
}