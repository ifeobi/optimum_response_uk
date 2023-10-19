import DynamicPages from "@/components/DynamicPages";
import HeadTags from "@/components/HeadTags";
import { support_we_offer } from "@/constants";

const career_plan = () => {
  const placement = support_we_offer[3];
  const title = placement.title;
  const desc = placement.desc;
  const services1 = placement.services1;
  const services2 = placement.services2;
  const subtitle0 = placement.subtitle0;
  const subtitle1 = placement.subtitle1;
  const subtitle2 = placement.subtitle2;
  const image1 = placement.image1;
  const image2 = placement.image2;

  return (
    <>
      <HeadTags title="Career Plan | Optimum Response Care" desc={desc} />
      <DynamicPages
        title={title}
        desc={desc}
        services1={services1}
        services2={services2}
        services3={[]}
        subtitle0={subtitle0}
        subtitle1={subtitle1}
        subtitle2={subtitle2}
        image1={image1}
        image2={image2}
      />
    </>
  );
};

export default career_plan;
