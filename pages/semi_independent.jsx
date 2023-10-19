import DynamicPages from "@/components/DynamicPages";
import HeadTags from "@/components/HeadTags";
import { support_we_offer } from "@/constants";


const semi_independent = () => {
  const placement = support_we_offer[0];
  const title = placement.title;
  const desc = placement.desc;
  const services1 = placement.services1;
  const services2 = placement.services2;
  const subtitle1 = placement.subtitle1;
  const subtitle2 = placement.subtitle2;

  return (
    <>
      <HeadTags title="Semi-Independent Placement | Optimum Response Care" desc={desc} />

      <DynamicPages
        title={title}
        desc={desc}
        services1={services1}
        services2={services2}
        services3={[]}
        subtitle1={subtitle1}
        subtitle2={subtitle2}
      />
    </>
  );
};

export default semi_independent;
