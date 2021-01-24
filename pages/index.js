export { default } from "../components/index";
import { getTableData } from "../components/index/queries";

export async function getStaticProps() {
  const tableData = await getTableData();
  return {
    props: {
      tableData,
    },
    revalidate: 1,
  };
}
