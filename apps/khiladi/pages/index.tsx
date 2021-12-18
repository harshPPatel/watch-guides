import { Data, KhiladiData } from '@watch-guides/data';

import Header from '../components/Header';
import styles from './index.module.scss';

export function Index(props: Data) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  console.log(props);
  return (
    <>
      <Header title={props.title} description={props.description} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: KhiladiData,
  };
}

export default Index;
