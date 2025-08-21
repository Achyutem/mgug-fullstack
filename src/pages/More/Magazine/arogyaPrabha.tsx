import MagazinePage from "@/components/magazinePage";
import { sevaPathTitles } from "@/utils/moreData";

export default function SevaPathMagazinePage() {
  return <MagazinePage apiType={15} pageTitles={sevaPathTitles} />;
}
