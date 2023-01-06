import useTrans from '~/hooks/use-trans';

import Demo from 'components/demo';
import Intro from 'components/intro';
import Layout from 'components/layout';
import Preview from 'components/preview';
import Trial from 'components/trial';

const Home = () => {
  const trans = useTrans();
  return (
    <Layout title={trans.home.title}>
      <div className="flex-1 w-full">
        <Intro />

        <Demo />

        <Preview />

        <Trial />
      </div>
    </Layout>
  );
};

export default Home;
